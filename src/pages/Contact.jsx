// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Contacto
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
            Información de Contacto
          </h2>
          <p className="text-lg text-gray-700 mb-4">Joaquín Cancino Torres</p>
          <p className="text-lg text-gray-700 mb-4">
            Correo:{" "}
            <a
              href="mailto:Joaquin.cancino@alu.ucm.cl"
              className="text-blue-500 hover:underline"
            >
              Joaquin.cancino@alu.ucm.cl
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            GitHub:{" "}
            <a
              href="https://github.com/Migthynice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Migthynice
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Teléfono: +56 9 3901 5812
          </p>
          <div className="flex justify-center space-x-8 mt-6">
            <a
              href="https://github.com/Migthynice-UCM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="GitHub"
                className="h-10 w-10 transition duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                alt="LinkedIn"
                className="h-10 w-10 transition duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/instagram.png"
                alt="Instagram"
                className="h-10 w-10 transition duration-300 transform hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
