import { Link } from 'react-router-dom';
import { ArrowRight, Play, Camera, Palette, Share2, Globe, Film, Mic, Paintbrush } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Palette,
      title: 'Logo & Identity',
      description: 'Unique brand identities',
      color: 'yellow',
      delay: '0'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals',
      color: 'blue',
      delay: '100'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content',
      color: 'yellow',
      delay: '200'
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Digital experiences',
      color: 'blue',
      delay: '300'
    }
  ];

  const portfolioHighlights = [
    { id: 1, category: 'photography', image: 'https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Urban Portraits' },
    { id: 2, category: 'design', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Brand Identity' },
    { id: 3, category: 'video', image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Commercial' },
    { id: 4, category: 'mural', image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Street Art' }
  ];

  return (
    <div>
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-yellow-400/10 to-blue-500/30"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 font-bold text-xs sm:text-sm uppercase">
                  <div className="w-2 h-2 bg-black animate-pulse"></div>
                  Nairobi's Creative Studio
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                <span className="block text-black">WE</span>
                <span className="block text-black">MAKE</span>
                <span className="block">
                  <span className="text-yellow-400">ART</span>
                  <span className="text-blue-500">.</span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                From graffiti walls to digital screens, we create visual experiences that capture attention and inspire action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="group bg-black text-white px-8 py-4 font-bold uppercase flex items-center justify-center gap-3 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  View Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-black text-black px-8 py-4 font-bold uppercase text-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  Let's Talk
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-black">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase font-bold">Projects</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-black">30+</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase font-bold">Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-black">5★</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase font-bold">Rating</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-yellow-400"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-500"></div>
                <img
                  src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative work"
                  className="relative z-10 w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute top-8 right-8 bg-black text-white p-4 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center">
                      <Play className="w-6 h-6 text-black fill-black" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold">Watch</div>
                      <div className="text-xs text-gray-400">Our Reel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 bg-gray-50">
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
              Full-spectrum creative services that bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ animationDelay: `${service.delay}ms` }}
                className={`group relative bg-white p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 ${
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
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-500">Our Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
              FEATURED <span className="text-yellow-400">PROJECTS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {portfolioHighlights.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer h-[300px]"
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
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-400">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              LET'S CREATE SOMETHING<br />
              <span className="text-yellow-400">AMAZING</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a brand refresh, a mural that turns heads, or content that goes viral, we're here to make it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 p-6 text-center border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-black text-xl">@</span>
              </div>
              <div className="text-xs uppercase font-bold text-gray-400 mb-2">Email</div>
              <div className="text-base font-bold">hello@mkenya.studio</div>
            </div>

            <div className="bg-white/5 p-6 text-center border-2 border-transparent hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-black text-xl">+</span>
              </div>
              <div className="text-xs uppercase font-bold text-gray-400 mb-2">Phone</div>
              <div className="text-base font-bold">+254 XXX XXX XXX</div>
            </div>

            <div className="bg-white/5 p-6 text-center border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-black text-xl">📍</span>
              </div>
              <div className="text-xs uppercase font-bold text-gray-400 mb-2">Location</div>
              <div className="text-base font-bold">Nairobi, Kenya</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 font-bold uppercase hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
