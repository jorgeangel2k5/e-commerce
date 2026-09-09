import React from 'react';
import { Link } from 'react-router';

 const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-yellow-500 tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A00] text-white px-2 text-sm rounded rotate-12 absolute -mt-12 ml-20 ">
          Página no encontrada
        </div>
        <h2 className="text-3xl font-bold mt-4 mb-2 text-gray-900">
          ¡Ups! Algo salió mal.
        </h2>
        <p className="text-gray-600 mb-8">
          La página que estás buscando no existe o fue movida a otra dirección.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out inline-block"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;