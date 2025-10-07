import { Link } from 'react-router-dom';
import { Camera, Palette, Share2, Globe, Film, Mic, Paintbrush } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'Logo & Identity',
      description: 'Unique brand identities',
      color: 'yellow',
      delay: '0',
      category: 'design'
    },
    {
      id: 2,
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals',
      color: 'blue',
      delay: '100',
      category: 'design'
    },
    {
      id: 3,
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content',
      color: 'yellow',
      delay: '200',
      category: 'design'
    },
    {
      id: 4,
      icon: Globe,
      title: 'Web Design',
      description: 'Digital experiences',
      color: 'blue',
      delay: '300',
      category: 'design'
    },
    {
      id: 5,
      icon: Camera,
      title: 'Photography',
      description: 'Stunning shots',
      color: 'yellow',
      delay: '400',
      category: 'photography'
    },
    {
      id: 6,
      icon: Film,
      title: 'Videography',
      description: 'Compelling stories',
      color: 'blue',
      delay: '500',
      category: 'video'
    },
    {
      id: 7,
      icon: Mic,
      title: 'Audio Design',
      description: 'Soundscapes',
      color: 'yellow',
      delay: '600',
      category: 'video'
    },
    {
      id: 8,
      icon: Paintbrush,
      title: 'Mural Art',
      description: 'Street art & murals',
      color: 'blue',
      delay: '700',
      category: 'mural'
    }
  ];

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
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              style={{ animationDelay: `${service.delay}ms` }}
              className="group relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 cursor-pointer border-gray-200 hover:border-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-6 bg-gray-100 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon
                    className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-black mb-2 text-black group-hover:text-white uppercase transition-colors duration-300">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
