// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    name: "Plataforma Web para Dejo Aromas",
    description:
      'Desarrollo de una plataforma web para optimizar las ventas en la empresa de perfumes "Dejo Aromas".',
    year: "2023",
    icon: "https://img.icons8.com/color/48/000000/web-design.png",
    link: "https://github.com/Migthynice-UCM/DejoAromasWebPage",
  },
  {
    name: "Sistema de Gestión para Club de Tenis Graneros",
    description:
      "Implementación de un sistema de gestión de torneos y reservas para el Club de Tenis Graneros.",
    year: "2022",
    icon: "https://img.icons8.com/color/48/000000/tennis.png",
    link: "https://github.com/Migthynice-UCM/ClubDeTenisGraneros",
  },
  {
    name: "Análisis de Ingredientes en Alimentos",
    description:
      "Aplicación Android para analizar ingredientes usando OCR y determinar su impacto en la salud.",
    year: "2024",
    icon: "https://img.icons8.com/color/48/000000/food-barcode.png",
    link: "https://github.com/Migthynice-UCM/AnalisisDeIngredientesApp",
  },
  // Añade más proyectos si es necesario
];

const Projects = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Proyectos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.icon}
                alt={project.name}
                className="h-16 w-16 mb-4"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {project.name}
                </h2>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-gray-500">{project.year}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
