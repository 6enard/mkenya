import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 overflow-hidden">
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
  );
}
