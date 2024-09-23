import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f8d6ff] shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-black cursor-pointer">
          MyLogo
        </div>
        <div className="hidden md:flex space-x-6">
          {["Inicio", "Servicios", "Nosotros", "PQR", "Contacto", "Ubicación"].map((item) => (
            <NavLink
              key={item}
              to={item === "Servicios" ? "/services" : "/"}
              className={({ isActive }) =>
                `text-black font-semibold py-2 px-4 rounded hover:bg-[#d18cd6] transition duration-300 
                ${isActive ? 'bg-[#d18cd6] text-white' : ''}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className="text-3xl md:hidden cursor-pointer" onClick={toggleMenu}>
          <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#f8d6ff] text-black">
          {["Inicio", "Servicios", "Nosotros", "PQR", "Contacto", "Ubicación"].map((item) => (
            <NavLink
              key={item}
              to={item === "Servicios" ? "/services" : "/"}
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-[#d18cd6] transition duration-300 
                ${isActive ? 'bg-[#d18cd6] text-white' : ''}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
