import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-white">
      <h1 className="text-8xl font-extrabold text-amber-500 mb-2">404</h1>
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-gray-400 mb-6">
        La ruta que intentás visitar no existe o fue movida.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl transition-colors inline-block"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;