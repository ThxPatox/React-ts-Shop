import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const { cart, totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <main>
      <button onClick={() => navigate("/")}>
        ← Volver
      </button>

      <h1>Mi carrito</h1>

      <p>Productos: {totalItems}</p>

      {cart.map((item) => (
        <div key={item.product.id}>
          <h2>{item.product.name}</h2>

          <p>
            ${item.product.price.toLocaleString("es-CL")}
          </p>

          <p>
            Cantidad: {item.quantity}
          </p>
        </div>
      ))}
    </main>
  );
}

export default Cart;