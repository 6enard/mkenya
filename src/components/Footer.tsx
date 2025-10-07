import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-black via-red-600 to-green-600 relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">M</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400"></div>
            </div>
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-black via-red-600 via-green-600 to-black bg-clip-text text-transparent">
                MKENYA
              </h3>
              <p className="text-xs text-blue-500 font-bold tracking-widest -mt-1">STUDIO</p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-bold uppercase">
            <a href="#" className="text-black hover:text-yellow-400 transition-colors">Instagram</a>
            <a href="#" className="text-black hover:text-yellow-400 transition-colors">Facebook</a>
            <a href="#" className="text-black hover:text-yellow-400 transition-colors">Twitter</a>
            <a href="#" className="text-black hover:text-yellow-400 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 MKENYA Studio. Nairobi's Creative Heartbeat.
          </p>
        </div>
      </div>
    </footer>
  );
}
