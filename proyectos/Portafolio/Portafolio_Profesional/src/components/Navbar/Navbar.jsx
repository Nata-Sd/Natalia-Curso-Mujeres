import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="bg-[#0a0a0a] border-b border-[#ffe0ed]/20 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        
          <div className="flex items-center space-x-2">
            <span className="text-2xl animate-pulse">🌸</span>
            <span className="text-[#ffe0ed] font-bold text-xl hover:text-[#ff61a6] transition-colors duration-300">
              Portfolio
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              to="/home"
              className={`text-[#ffe0ed] hover:text-[#ff61a6] transition-all duration-300 py-2 relative ${
                activeItem === 'home' ? 'font-semibold' : ''
              }`}
              onClick={() => setActiveItem('home')}
            >
              <span className="relative">
                Home
                {activeItem === 'home' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff61a6] rounded-full shadow-glow animate-pulse"></span>
                )}
              </span>
            </Link>

            <Link
              to="/inicio"
              className={`text-[#ffe0ed] hover:text-[#ff61a6] transition-all duration-300 py-2 relative ${
                activeItem === 'inicio' ? 'font-semibold' : ''
              }`}
              onClick={() => setActiveItem('inicio')}
            >
              <span className="relative">
                Inicio
                {activeItem === 'inicio' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff61a6] rounded-full shadow-glow animate-pulse"></span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;