// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto p-4">
        <section className="text-center my-8">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/images/users-avatar-svgrepo-com.svg"
              alt="User Avatar"
              className="h-32 w-32 rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Hola, mi nombre es Joaquín Cancino
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Soy estudiante de Ingeniería Civil en Informática en la Universidad
            Católica del Maule. He trabajado en proyectos para la empresa de
            perfumes "Dejo Aromas" y para el "Club de Tenis Graneros".
            Actualmente, manejo lenguajes como JavaScript, React, Python,
            Flutter, HTML, entre otros.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Migthynice-UCM"
              className="text-gray-600 hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/material-outlined/24/000000/github.png"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-600 hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/material-outlined/24/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-600 hover:text-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/material-outlined/24/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <img
                src="/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg" // Cambia esto por la ruta a tu imagen de perfil
                alt="Profile"
                className="rounded-full w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Sobre mí
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Soy Joaquín Cancino, estudiante de Ingeniería Civil en
                Informática en la Universidad Católica del Maule. Me apasiona el
                desarrollo de software y he trabajado en diversos proyectos que
                han mejorado mis habilidades y conocimientos. Mis principales
                áreas de expertise incluyen JavaScript, React, Python, Flutter,
                y HTML.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                A lo largo de mi carrera, he tenido la oportunidad de participar
                en proyectos interesantes y desafiantes. Uno de ellos fue para
                la empresa de perfumes "Dejo Aromas", donde desarrollé una
                plataforma web para optimizar sus ventas. Otro proyecto
                destacado fue para el "Club de Tenis Graneros", donde implementé
                un sistema de gestión de torneos y reservas.
              </p>
              <p className="text-lg text-gray-700">
                Siempre estoy buscando aprender y mejorar mis habilidades, y
                estoy emocionado por las oportunidades futuras donde pueda
                aplicar mis conocimientos y seguir creciendo profesionalmente.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 mt-12">
          <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
              Estadísticas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900">3+</h3>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900">10+</h3>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900">5+</h3>
                <p className="text-gray-600">Lenguajes Dominados</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
