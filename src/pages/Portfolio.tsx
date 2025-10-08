import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const portfolio = [
    { id: 1, category: 'design', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBjWMxOl-BpELQYf6ZHTiIsbEpK3gICH2wg&s', title: 'Standard Chartered Bank', span: 'row-span-2', description: 'Spatial design for activation agency managing annual reports, showcase booths, and VIP areas' },
    { id: 2, category: 'social-media', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Zp75KbuW8HS3lR1JxQR3XGqutHd1McS2Gg&s', title: 'Momentum Credit', span: 'col-span-2', description: 'Year-long social media contract ensuring consistent brand application across sub-brands' },
    { id: 3, category: 'branding', image: 'https://pbs.twimg.com/profile_images/1395692407753121797/_07tmlXL_400x400.jpg', title: 'Snow International', span: '', description: 'Complete brand communication redesign for chemical company across African countries' },
    { id: 4, category: 'branding', image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'PureDrop KE', span: '', description: 'Full branding exercise for a new water purification company' },
    { id: 5, category: 'design', image: 'https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Chemraw EA LTD', span: 'row-span-2', description: 'Company profile design for chemical manufacturing and distribution' },
    { id: 6, category: 'branding', image: 'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Lemik Leasing Ltd', span: '', description: 'Complete brand architecture from logo to website for female-founded company' },
    { id: 7, category: 'branding', image: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Aspirelle Business', span: '', description: 'Brand design for financial training practice targeted at women' },
    { id: 8, category: 'legal', image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Banja & Co. Advocates', span: 'col-span-2', description: 'Complete branding and portfolio design for a legal practice' },
    { id: 9, category: 'design', image: 'https://cdn.mafrservices.com/sys-master-root/h0e/hb8/12456646672414/37100_Main.jpg', title: 'Arimis', span: '', description: 'Self-initiated rebrand project for the famous Arimis brand' }
  ];

  const filteredPortfolio = activeFilter === 'all'
    ? portfolio
    : portfolio.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ filter });
    }
  };

  return (
    <section className="pt-24 sm:pt-32 py-16 sm:py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-500">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
            LATEST <span className="text-yellow-400">PROJECTS</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            {['all', 'branding', 'design', 'social-media', 'legal'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] sm:auto-rows-[350px] gap-6 sm:gap-8">
          {filteredPortfolio.map((item, index) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.id}`}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`group relative overflow-hidden cursor-pointer ${item.span} rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-20"></div>

              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-30">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-black uppercase mb-3 rounded-full">
                    {item.category}
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-black mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.description}</p>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-40"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-40"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
