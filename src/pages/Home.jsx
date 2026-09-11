import initialProducts from "../data/productos";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Nuestros productos</h1>

      <div className="row g-4">
        {initialProducts.map((product) => (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;