import { Link } from 'react-router-dom';
import { ArrowRight, Play, Camera, Palette, Share2, Globe, Film, Mic, Paintbrush, MapPin } from 'lucide-react';
import { useState } from 'react';
import Map from '../components/Map';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'success', message: 'Thank you! We will get back to you shortly.' });
    setFormData({ name: '', email: '', service: '', message: '' });
  };
  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'Logo & Identity',
      description: 'Unique brand identities',
      color: 'yellow',
      delay: '0'
    },
    {
      id: 2,
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals',
      color: 'blue',
      delay: '100'
    },
    {
      id: 3,
      icon: Share2,
      title: 'Social Media',
      description: 'Engaging content',
      color: 'yellow',
      delay: '200'
    },
    {
      id: 4,
      icon: Globe,
      title: 'Web Design',
      description: 'Digital experiences',
      color: 'blue',
      delay: '300'
    }
  ];

  const portfolioHighlights = [
    { id: 1, category: 'design', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBjWMxOl-BpELQYf6ZHTiIsbEpK3gICH2wg&s', title: 'Standard Chartered Bank' },
    { id: 2, category: 'social-media', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Zp75KbuW8HS3lR1JxQR3XGqutHd1McS2Gg&s', title: 'Momentum Credit' },
    { id: 3, category: 'branding', image: 'https://images.pexels.com/photos/8297488/pexels-photo-8297488.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Snow International' },
    { id: 6, category: 'branding', image: 'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Lemik Leasing Ltd' }
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
              <Link
                key={index}
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
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group relative overflow-hidden cursor-pointer h-[300px] rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-yellow-400 group-hover:text-white text-xs sm:text-sm font-bold uppercase mb-2 transition-colors duration-300">
                      {item.category}
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl font-black">{item.title}</h3>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black">@</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400 mb-1">Email</div>
                    <div className="text-base sm:text-lg font-bold">hello@mkenya.studio</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black">+</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400 mb-1">Phone</div>
                    <div className="text-base sm:text-lg font-bold">+254 XXX XXX XXX</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-black" size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400 mb-1">Location</div>
                    <div className="text-base sm:text-lg font-bold">mkenya studio, Nairobi</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus && (
                  <div className={`p-4 rounded ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    <p className="font-bold text-sm">{formStatus.message}</p>
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium"
                  >
                    <option value="">Service Needed</option>
                    <option value="Logo & Identity">Logo & Identity</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Photography">Photography</option>
                    <option value="Videography">Videography</option>
                    <option value="Audio Design">Audio Design</option>
                    <option value="Mural Art">Mural Art</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 font-black uppercase text-base sm:text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                FIND <span className="text-yellow-400">US HERE</span>
              </h3>
              <p className="text-gray-300">Visit our studio in Nairobi</p>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
