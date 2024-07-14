// src/pages/Education.jsx
import React from "react";

const education = [
  {
    degree: "Ingeniería Civil en Informática",
    institution: "Universidad Católica del Maule",
    years: "2019 - Presente",
    icon: "https://img.icons8.com/color/48/000000/graduation-cap.png",
  },
  {
    degree: "Curso de Desarrollo Web",
    institution: "Oracle Alura Latam",
    years: "2024 - Presente",
    icon: "https://img.icons8.com/color/48/000000/web-design.png",
  },
  {
    degree: "Diplomado en Ciencia de Datos",
    institution: "Platzi",
    years: "2021",
    icon: "https://img.icons8.com/color/48/000000/data-configuration.png",
  },
  // Añade más elementos si es necesario
];

const Education = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Formación
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={edu.icon} alt={edu.degree} className="h-16 w-16 mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {edu.degree}
                </h2>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-gray-500">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
