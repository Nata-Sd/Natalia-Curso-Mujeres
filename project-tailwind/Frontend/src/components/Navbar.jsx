import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const menuCelular = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    /** la clase myNav esta en index.css pero es tailwind! */
    <nav className="myNav">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl">MyLogo</div>
        {/* Botones */}
        <div className="space-x-4 hidden md:flex">
          <button className="hover:text-gray-200 border rounded p-1 bg-white text-black hover:bg-black">
            Inicio
          </button>
          <button className="hover:text-gray-200 border rounded p-1 bg-white text-black hover:bg-black">
            Servicios
          </button>
          <button className="hover:text-gray-200 border rounded p-1 bg-white text-black hover:bg-black">
            Nosotros
          </button>
          <button className="hover:text-gray-200 border rounded p-1 bg-white text-black hover:bg-black">
            PQR
          </button>
          <button className="hover:text-gray-200 border rounded p-1 bg-white text-black hover:bg-black">
            Contacto
          </button>
          <button className="hover:text-gray-200 border rounded p-1 bg-white text-black hover:bg-black">
            Ubicacion
          </button>
        </div>
        {/* Usuario */}
        <div className="hidden md:flex text-2xl border rounded-2xl p-2">
          <i class="fa-solid fa-user"></i>
        </div>
        {/* Menu hamburguesa para celular */}
        <div className="text-2xl md:hidden">
          <button onClick={menuCelular}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        {estaAbierto && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-blue-600 text-center">
            <button className="block w-full py-2 hover:text-gray-200 rounded p-1 ">
              Inicio
            </button>
            <button className="block w-full py-2 hover:text-gray-200 rounded p-1 ">
              Servicios
            </button>
            <button className="block w-full py-2 hover:text-gray-200 rounded p-1 ">
              Nosotros
            </button>
            <button className="block w-full py-2 hover:text-gray-200 rounded p-1 ">
              PQR
            </button>
            <button className="block w-full py-2 hover:text-gray-200 rounded p-1 ">
              Contacto
            </button>
            <button className="block w-full py-2 hover:text-gray-200 rounded p-1 ">
              Ubicacion
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;