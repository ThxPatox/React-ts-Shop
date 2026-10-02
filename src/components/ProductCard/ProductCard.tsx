import type { IProduct } from "../../models/product.model";
import { useCart } from "../../context/CartContext";

import "./ProductCard.css";

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <article className="product-card">
      <h2>{product.name}</h2>

      <p className="product-description">
        {product.description}
      </p>

      <strong className="product-price">
        ${product.price.toLocaleString("es-CL")}
      </strong>

      <button className="product-button"
        onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </article>
  );
}

export default ProductCard;