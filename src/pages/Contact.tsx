import { ArrowRight, MapPin } from 'lucide-react';
import Map from '../components/Map';

export default function Contact() {
  return (
    <section className="pt-24 sm:pt-32 py-16 sm:py-24 px-4 bg-black text-white relative overflow-hidden min-h-screen">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-400">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              LET'S CREATE<br />
              SOMETHING<br />
              <span className="text-yellow-400">AMAZING</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you need a brand refresh, a mural that turns heads, or content that goes viral, we're here to make it happen.
            </p>

            <div className="space-y-4 sm:space-y-6">
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
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium"
                />
              </div>

              <div>
                <select className="w-full px-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none transition-colors text-black font-medium">
                  <option>Service Needed</option>
                  <option>Logo & Identity</option>
                  <option>Graphic Design</option>
                  <option>Social Media</option>
                  <option>Web Design</option>
                  <option>Photography</option>
                  <option>Videography</option>
                  <option>Audio Design</option>
                  <option>Mural Art</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
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

        <div className="mt-16">
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
  );
}
