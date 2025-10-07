import { useNavigate } from 'react-router-dom';
import { Camera, Palette, Share2, Globe, Film, Mic, Paintbrush } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Palette,
      title: 'Logo & Identity',
      description: 'Unique brand identities',
      color: 'yellow',
      delay: '0',
      category: 'design'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals',
      color: 'blue',
      delay: '100',
      category: 'design'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content',
      color: 'yellow',
      delay: '200',
      category: 'design'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Digital experiences',
      color: 'blue',
      delay: '300',
      category: 'design'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Stunning shots',
      color: 'yellow',
      delay: '400',
      category: 'photography'
    },
    {
      icon: Film,
      title: 'Videography',
      description: 'Compelling stories',
      color: 'blue',
      delay: '500',
      category: 'video'
    },
    {
      icon: Mic,
      title: 'Audio Design',
      description: 'Soundscapes',
      color: 'yellow',
      delay: '600',
      category: 'video'
    },
    {
      icon: Paintbrush,
      title: 'Mural Art',
      description: 'Street art & murals',
      color: 'blue',
      delay: '700',
      category: 'mural'
    }
  ];

  const handleServiceClick = (category: string) => {
    navigate(`/portfolio?filter=${category}`);
  };

  return (
    <section className="pt-24 sm:pt-32 py-16 sm:py-24 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-500">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight">
              OUR<br />
              <span className="text-yellow-400">SERVICES</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-md">
            Full-spectrum creative services that bring your vision to life through art, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service.category)}
              style={{ animationDelay: `${service.delay}ms` }}
              className={`group relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 text-left cursor-pointer ${
                service.color === 'yellow' ? 'border-yellow-400' : 'border-blue-500'
              }`}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-6 ${
                service.color === 'yellow' ? 'bg-yellow-400/10' : 'bg-blue-500/10'
              } group-hover:scale-110 transition-transform duration-300`}>
                <service.icon
                  className={`w-7 h-7 sm:w-8 sm:h-8 ${
                    service.color === 'yellow' ? 'text-yellow-400' : 'text-blue-500'
                  }`}
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-lg sm:text-xl font-black mb-2 text-black uppercase">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>

              <div className={`absolute bottom-0 left-0 w-full h-1 ${
                service.color === 'yellow' ? 'bg-yellow-400' : 'bg-blue-500'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
