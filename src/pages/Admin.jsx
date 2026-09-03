import React, {useState} from "react";

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
    category: '',
    stock: '',
    image: ''
};


const Admin = () =>{
    const [products, setProducts] = useState(initialProducts);
    const [formData, setFormData] = useState(emptyForm);

    const handleEdit = (product) => {
    console.log("Editar producto:", product);
    };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que querés eliminar este producto?")) {
      setProducts(products.filter(item => item.id !== id));
    }
    };

    return(
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Listado de Productos</h2>
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
                        <td className="p-4 text-center whitespace-nowrap">
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
                            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors"
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
