import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ProductContext } from '../context/ProductContext';
import NotFound from './NotFound';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { productos } = useContext(ProductContext);

  // Busca el producto en el Contexto (convirtiendo ID a String por seguridad)
  const producto = productos?.find((item) => String(item.id) === String(id));

  if (!producto) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen text-white">
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 text-gray-200 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer text-sm font-medium"
        onClick={() => navigate(-1)}
      >
        ← Volver
      </button>

      <h1 className="text-3xl font-bold mt-6 mb-2 text-amber-500">
        Detalle del producto
      </h1>

      <div className="mt-6 p-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              className="w-full h-80 object-cover rounded-lg border border-zinc-800"
              src={producto.image || producto.imagen}
              alt={producto.title || producto.nombre}
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-2xl text-white mb-2">
                {producto.title || producto.nombre}
              </h2>

              <span className="inline-block px-3 py-1 bg-zinc-800 text-amber-500 rounded-full text-xs font-semibold mb-4 capitalize">
                {producto.category || producto.categoria}
              </span>

              <p className="text-amber-500 text-3xl font-extrabold mb-3">
                ${producto.price || producto.precio}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                Stock disponible: <span className="text-white font-medium">{producto.stock}</span>
              </p>

              <p className="text-gray-300 text-base border-t border-zinc-800 pt-4 leading-relaxed">
                {producto.description || producto.descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;