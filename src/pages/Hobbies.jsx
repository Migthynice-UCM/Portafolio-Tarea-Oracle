// src/pages/Hobbies.jsx
import React from "react";

const hobbies = [
  {
    name: "Escuchar música",
    icon: "https://img.icons8.com/color/48/000000/headphones.png",
  },
  { name: "Leer", icon: "https://img.icons8.com/color/48/000000/book.png" },
  {
    name: "Andar en bicicleta",
    icon: "https://img.icons8.com/color/48/000000/bicycle.png",
  },
  {
    name: "Jugar videojuegos",
    icon: "https://img.icons8.com/color/48/000000/controller.png",
  },
  {
    name: "Hacer deporte",
    icon: "https://img.icons8.com/color/48/000000/dumbbell.png",
  },
  {
    name: "Cocinar",
    icon: "https://img.icons8.com/color/48/000000/cooking.png",
  },
];

const Hobbies = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Hobbies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={hobby.icon}
                alt={hobby.name}
                className="h-16 w-16 mr-4"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {hobby.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
