import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product, producto }) => {
  // Acepta tanto la prop 'product' como 'producto'
  const item = product || producto;

  // Si por alguna razón el ítem viene undefined o nulo, no rompe la app
  if (!item) {
    return null;
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between p-4 transition-all hover:border-zinc-700">
      <div>
        {/* Renderizado seguro de imagen */}
        <img
          src={item.image || item.imagen || "https://via.placeholder.com/300"}
          alt={item.title || item.nombre || "Producto"}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />

        <h5 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {item.title || item.nombre || "Sin título"}
        </h5>

        <p className="text-sm text-gray-400 line-clamp-2 mb-3">
          {item.description || item.descripcion || "Sin descripción disponible"}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-extrabold text-amber-500">
            ${item.price ?? item.precio ?? 0}
          </span>
          <span className="text-xs text-gray-400 bg-zinc-800 px-2 py-1 rounded-md">
            Stock: {item.stock ?? 0}
          </span>
        </div>
      </div>

      <Link
        to={`/product/${item.id}`}
        className="w-full text-center py-2.5 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-lg transition-colors text-sm inline-block"
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default ProductCard;