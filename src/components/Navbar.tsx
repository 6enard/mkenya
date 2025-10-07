import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between h-16 sm:h-20 relative">
          <Link to="/" className="flex items-center gap-3 lg:absolute lg:left-0">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-white font-black text-xl sm:text-2xl">M</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tighter bg-gradient-to-r from-black via-red-600 via-green-600 to-black bg-clip-text text-transparent">
                MKENYA
              </h1>
              <p className="text-[9px] sm:text-xs text-blue-500 font-bold tracking-widest -mt-1">STUDIO</p>
            </div>
          </Link>

          <div className="flex-shrink-0 absolute right-0 lg:relative lg:right-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-wide transition-colors relative group ${
                  isActive(item.path) ? 'text-yellow-400' : 'text-black hover:text-yellow-400'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-2.5 text-sm font-bold uppercase hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-bold uppercase text-sm py-2 ${
                  isActive(item.path) ? 'text-yellow-400' : 'text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
