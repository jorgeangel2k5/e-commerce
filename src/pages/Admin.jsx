import React, {useState} from "react";
import { useForm } from "react-hook-form";

const initialProducts = [
  {
    id: 1,
    title: "Bicicleta Mountain Bike R29 TopMega",
    description: "Cuadro de aluminio, 21 velocidades Shimano, frenos a disco mecánico y suspensión delantera.",
    price: 320000,
    category: "Mountain Bike",
    stock: 8,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Bicicleta de Ruta Venzo Phoenix R28",
    description: "Diseño aerodinámico ultra liviano, transmisión Shimano Claris 16v, ideal para entrenamiento y carrera.",
    price: 680000,
    category: "Ruta",
    stock: 3,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Bicicleta Urbana Paseo Lady R26",
    description: "Cuadro bajo para mayor comodidad, canasto frontal incluido, guardabarros y portapaquetes trasero.",
    price: 210000,
    category: "Urbana",
    stock: 5,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
  }
];
const emptyForm = {
    id: null,
    title: '',
    description: '',
    price: '',
    category: 'Mountain Bike',
    stock: '',
    image: ''
};


const Admin = () =>{
    const [products, setProducts] = useState(initialProducts);
    const [editingId, setEditingId] = useState(null);

    const {register,handleSubmit,reset,setValue,formState: { errors },} = useForm(emptyForm);

    const onSubmit = (data) => {
        
        const formattedData = {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock)
        };

        if (editingId) {
            setProducts(products.map(item => item.id === editingId ? { ...formattedData, id: editingId } : item));
            setEditingId(null);
        } 
        else {
            const newProduct = {
            ...formattedData,
            id: Date.now()
            };
            setProducts([...products, newProduct]);
        }

        reset();
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setValue('title', product.title);
        setValue('description', product.description);
        setValue('category', product.category);
        setValue('price', product.price);
        setValue('stock', product.stock);
        setValue('image', product.image);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        reset();
    };


    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que querés eliminar este producto?")) {
            setProducts(products.filter(item => item.id !== id));
            if (editingId === id) handleCancelEdit();
        }
    };
    
    return(
        <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {editingId ? 'Editar Bicicleta' : 'Agregar Nueva Bicicleta'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Titulo</label>
              <input
                type="text"
                placeholder="Ej. Bicicleta Venzo R29"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                {...register('title', { required: 'El título es obligatorio' })}
              />
              {errors.title && <span className="text-red-500 text-xs mt-1 block">{errors.title.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
                {...register('category', { required: 'La categoría es obligatoria' })}
              >
                <option value="Mountain Bike">Mountain Bike</option>
                <option value="Ruta">Ruta</option>
                <option value="Urbana">Urbana</option>
                <option value="BMX">BMX</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
              <input
                type="number"
                placeholder="Ej. 3.000.000"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.price ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                {...register('price', {
                  required: 'El precio es obligatorio',
                  min: { value: 1, message: 'El precio debe ser mayor a 0' }
                })}
              />
              {errors.price && <span className="text-red-500 text-xs mt-1 block">{errors.price.message}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock (Unidades)</label>
              <input
                type="number"
                placeholder="Ej. 5"
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.stock ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                {...register('stock', {
                  required: 'El stock es obligatorio',
                  min: { value: 0, message: 'El stock no puede ser negativo' }
                })}
              />
              {errors.stock && <span className="text-red-500 text-xs mt-1 block">{errors.stock.message}</span>}
            </div>

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL de la Imagen</label>
            <input
              type="text"
              placeholder="https://ejemplo.com/imagen.jpg"
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.image ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              {...register('image', {
                required: 'La URL de la imagen es obligatoria',
                pattern: {
                  value: /^(https?:\/\/)/,
                  message: 'Ingrese una URL válida (debe comenzar con http:// o https://)'
                }
              })}
            />
            {errors.image && <span className="text-red-500 text-xs mt-1 block">{errors.image.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              rows="3"
              placeholder="Detalles técnicos, materiales, etc."
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
              {...register('description', { required: 'La descripción es obligatoria' })}
            />
            {errors.description && <span className="text-red-500 text-xs mt-1 block">{errors.description.message}</span>}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors"
            >
              {editingId ? 'Guardar Cambios' : 'Agregar Bicicleta'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
              >
                Cancelar Edición
              </button>
            )}
          </div>
        </form>
      </div>
            <h2 className="text-2xl font-bold text-gray-800 my-6">Listado de Productos Actuales</h2>
            <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
                    <tr>
                        <th className="p-4 text-center">Imagen</th>
                        <th className="p-4">Título / Descripción</th>
                        <th className="p-4">Categoría</th>
                        <th className="p-4">Precio</th>
                        <th className="p-4 text-center">Stock</th>
                        <th className="p-4 text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {products.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 text-center">
                            <img
                            src={item.image}
                            alt={item.title}
                            className="w-14 h-14 object-cover rounded-md mx-auto"
                            />
                        </td>
                        <td className="p-4">
                            <div className="font-semibold text-gray-900">{item.title}</div>
                            <div className="text-xs text-gray-500 max-w-md">{item.description}</div>
                        </td>
                        <td className="p-4 whitespace-nowrap">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.category}
                            </span>
                        </td>
                        <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                            ${item.price.toLocaleString('es-AR')}
                        </td>
                        <td className="p-4 text-center text-gray-900 whitespace-nowrap">
                            {item.stock} u.
                        </td>
                        <td className="p-4 text-center whitespace-nowrap">
                            <button
                            onClick={() => handleEdit(item)}
                            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded mr-2 transition-colors"
                            >
                            Editar
                            </button>
                            <button
                            onClick={() => handleDelete(item.id)}
                            className="px-3 py-1.5 bg-red-400 hover:bg-red-800 text-white text-xs font-medium rounded transition-colors"
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
