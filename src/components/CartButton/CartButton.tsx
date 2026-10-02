import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./CartButton.css";

interface CartButtonProps {
  scale?: number;
}

function CartButton({ scale = 100 }: CartButtonProps) {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <button
      className="cart-button"
      style={{
        "--cart-scale": scale / 100,
      } as React.CSSProperties}
      onClick={() => navigate("/cart")}
      aria-label={`Carrito con ${totalItems} productos`}
    >
      <ShoppingCart className="cart-icon" />

      {totalItems > 0 && (
        <span className="cart-counter">
          {totalItems}
        </span>
      )}
    </button>
  );
}

export default CartButton;