const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">
          {product.description}
        </p>

        <h5>${product.price}</h5>

        <p>Stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductCard;