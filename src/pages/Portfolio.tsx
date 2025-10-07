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
    { id: 1, category: 'photography', image: 'https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Urban Portraits', span: 'row-span-2', description: 'Capturing the essence of city life through intimate portrait photography' },
    { id: 2, category: 'design', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Brand Identity', span: '', description: 'Complete brand identity system for modern businesses' },
    { id: 3, category: 'video', image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Commercial', span: 'col-span-2', description: 'High-quality commercial video production for brands' },
    { id: 4, category: 'mural', image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Street Art', span: '', description: 'Large-scale murals transforming urban spaces' },
    { id: 5, category: 'photography', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Fashion', span: 'row-span-2', description: 'Editorial fashion photography for magazines and brands' },
    { id: 6, category: 'design', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Digital', span: '', description: 'Digital design solutions for web and mobile' },
    { id: 7, category: 'mural', image: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Graffiti', span: 'col-span-2', description: 'Contemporary graffiti art with bold statements' },
    { id: 8, category: 'photography', image: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Editorial', span: '', description: 'Editorial photography for publications and media' }
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
            {['all', 'photography', 'design', 'video', 'mural'].map((filter) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] sm:auto-rows-[300px] gap-4 sm:gap-6">
          {filteredPortfolio.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.id}`}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-yellow-400 text-xs sm:text-sm font-bold uppercase mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-black">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white mt-3 text-sm font-bold">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
