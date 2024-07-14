// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Mi Portafolio
        </Link>
        <div className="flex space-x-4">
          <Link to="/about" className="text-gray-300 hover:text-white">
            Sobre mí
          </Link>
          <Link to="/skills" className="text-gray-300 hover:text-white">
            Skills
          </Link>
          <Link to="/hobbies" className="text-gray-300 hover:text-white">
            Hobbies
          </Link>
          <Link to="/education" className="text-gray-300 hover:text-white">
            Formación
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">
            Proyectos
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
