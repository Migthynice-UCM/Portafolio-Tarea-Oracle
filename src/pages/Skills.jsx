// src/pages/Skills.jsx
import React from "react";

const skills = [
  {
    name: "JavaScript",
    level: "Avanzado",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "React",
    level: "Avanzado",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "Python",
    level: "Intermedio",
    icon: "https://img.icons8.com/color/48/000000/python--v1.png",
  },
  {
    name: "Flutter",
    level: "Intermedio",
    icon: "https://img.icons8.com/color/48/000000/flutter.png",
  },
  {
    name: "HTML",
    level: "Avanzado",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    name: "CSS",
    level: "Avanzado",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "Node.js",
    level: "Intermedio",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
];

const Skills = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Habilidades
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16 mr-4"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {skill.name}
                </h2>
                <p className="text-gray-700">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
