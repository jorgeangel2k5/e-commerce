import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { productos, busqueda, setBusqueda } = useContext(ProductContext);

  const productosFiltrados = productos ? productos.filter((producto) =>
    producto.category?.toLowerCase().includes(busqueda.toLowerCase())
  ) : [];

  return (
    <div className="p-4">
      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
