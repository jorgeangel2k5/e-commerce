import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../context/ProductContext";

const emptyForm = {
  id: null,
  title: "",
  description: "",
  price: "",
  category: "Mountain Bike",
  stock: "",
  image: ""
};

const Admin = () => {
  const { productos = [], setProductos } = useContext(ProductContext);
  const [editingId, setEditingId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: emptyForm
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock)
    };

    if (editingId) {
      setProductos((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...formattedData, id: editingId } : item
        )
      );
      setEditingId(null);
    } else {
      const newProduct = {
        ...formattedData,
        id: Date.now()
      };
      setProductos((prev) => [...prev, newProduct]);
    }

    reset(emptyForm);
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setValue("title", product.title || product.nombre);
    setValue("description", product.description || product.descripcion);
    setValue("category", product.category || product.categoria || "Mountain Bike");
    setValue("price", product.price || product.precio);
    setValue("stock", product.stock);
    setValue("image", product.image || product.imagen);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    reset(emptyForm);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que querés eliminar este producto?")) {
      setProductos((prev) => prev.filter((item) => item.id !== id));
      if (editingId === id) handleCancelEdit();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-2 md:p-6 text-white">
      {/* Formulario */}
      <div className="bg-zinc-900 p-6 rounded-xl shadow-xl border border-zinc-800">
        <h2 className="text-xl font-bold text-amber-500 mb-6">
          {editingId ? "Editar Producto" : "Agregar Nuevo Producto"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Título
              </label>
              <input
                type="text"
                placeholder="Ej. Bicicleta Venzo R29"
                className={`w-full p-2.5 bg-zinc-800 text-white placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.title
                    ? "border-red-500 focus:ring-red-500/30"
                    : "border-zinc-700 focus:ring-amber-500/30 focus:border-amber-500"
                }`}
                {...register("title", { required: "El título es obligatorio" })}
              />
              {errors.title && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.title.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Categoría
              </label>
              <select
                className="w-full p-2.5 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                {...register("category", { required: "La categoría es obligatoria" })}
              >
                <option value="Mountain Bike">Mountain Bike</option>
                <option value="Ruta">Ruta</option>
                <option value="Urbana">Urbana</option>
                <option value="BMX">BMX</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Precio ($)
              </label>
              <input
                type="number"
                placeholder="Ej. 300000"
                className={`w-full p-2.5 bg-zinc-800 text-white placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.price
                    ? "border-red-500 focus:ring-red-500/30"
                    : "border-zinc-700 focus:ring-amber-500/30 focus:border-amber-500"
                }`}
                {...register("price", {
                  required: "El precio es obligatorio",
                  min: { value: 1, message: "El precio debe ser mayor a 0" }
                })}
              />
              {errors.price && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.price.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Stock (Unidades)
              </label>
              <input
                type="number"
                placeholder="Ej. 5"
                className={`w-full p-2.5 bg-zinc-800 text-white placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.stock
                    ? "border-red-500 focus:ring-red-500/30"
                    : "border-zinc-700 focus:ring-amber-500/30 focus:border-amber-500"
                }`}
                {...register("stock", {
                  required: "El stock es obligatorio",
                  min: { value: 0, message: "El stock no puede ser negativo" }
                })}
              />
              {errors.stock && (
                <span className="text-red-400 text-xs mt-1 block">
                  {errors.stock.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              URL de la Imagen
            </label>
            <input
              type="text"
              placeholder="https://ejemplo.com/imagen.jpg"
              className={`w-full p-2.5 bg-zinc-800 text-white placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.image
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-zinc-700 focus:ring-amber-500/30 focus:border-amber-500"
              }`}
              {...register("image", {
                required: "La URL de la imagen es obligatoria",
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: "Ingrese una URL válida (http:// o https://)"
                }
              })}
            />
            {errors.image && (
              <span className="text-red-400 text-xs mt-1 block">
                {errors.image.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Descripción
            </label>
            <textarea
              rows="3"
              placeholder="Detalles técnicos, materiales, etc."
              className={`w-full p-2.5 bg-zinc-800 text-white placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.description
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-zinc-700 focus:ring-amber-500/30 focus:border-amber-500"
              }`}
              {...register("description", {
                required: "La descripción es obligatoria"
              })}
            />
            {errors.description && (
              <span className="text-red-400 text-xs mt-1 block">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-lg transition-colors cursor-pointer text-sm"
            >
              {editingId ? "Guardar Cambios" : "Agregar Producto"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-gray-300 font-medium rounded-lg transition-colors cursor-pointer text-sm"
              >
                Cancelar Edición
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabla de Productos */}
      <h2 className="text-2xl font-bold text-amber-500 my-6">
        Listado de Productos
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-xl border border-zinc-800 bg-zinc-900">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-zinc-950 text-gray-400 uppercase text-xs font-semibold border-b border-zinc-800">
            <tr>
              <th className="p-4 text-center">Imagen</th>
              <th className="p-4">Título / Descripción</th>
              <th className="p-4">Categoría</th>
              <th className="p-4">Precio</th>
              <th className="p-4 text-center">Stock</th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {productos?.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-800/50 transition-colors">
                <td className="p-4 text-center">
                  <img
                    src={item.image || item.imagen}
                    alt={item.title || item.nombre}
                    className="w-14 h-14 object-cover rounded-lg border border-zinc-800 mx-auto"
                  />
                </td>
                <td className="p-4">
                  <div className="font-semibold text-white">
                    {item.title || item.nombre}
                  </div>
                  <div className="text-xs text-gray-400 max-w-xs truncate">
                    {item.description || item.descripcion}
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="bg-zinc-800 text-amber-500 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-700">
                    {item.category || item.categoria || "Gral"}
                  </span>
                </td>
                <td className="p-4 font-bold text-amber-500 whitespace-nowrap">
                  ${Number(item.price || item.precio || 0).toLocaleString("es-AR")}
                </td>
                <td className="p-4 text-center text-white whitespace-nowrap">
                  {item.stock} u.
                </td>
                <td className="p-4 text-center whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-zinc-950 text-xs font-bold rounded-lg mr-2 transition-colors cursor-pointer"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;