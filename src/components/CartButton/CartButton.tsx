import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import "./CartButton.css";

function CartButton() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <button
      className="cart-button"
      onClick={() => navigate("/cart")}
      aria-label={`Carrito con ${totalItems} productos`}
    >
      <span className="cart-icon">🛒</span>

      {totalItems > 0 && (
        <span className="cart-counter">
          {totalItems}
        </span>
      )}
    </button>
  );
}

export default CartButton;