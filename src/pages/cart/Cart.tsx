import { useNavigate } from "react-router-dom";

import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { useCart } from "../../context/CartContext";

import "./Cart.css";

function Cart() {
  const { cart, totalItems } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <HeaderBar />

      <section className="cart-container">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Volver a productos
        </button>

        <div className="cart-title">
          <div>
            <span className="cart-eyebrow">TU COMPRA</span>
            <h1>Mi carrito</h1>
          </div>

          <span className="cart-total-items">
            {totalItems} {totalItems === 1 ? "producto" : "productos"}
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>
            <p>Agrega productos para comenzar tu compra.</p>

            <button onClick={() => navigate("/")}>
              Ver productos
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-products">
              {cart.map((item) => (
                <article
                  className="cart-item"
                  key={item.product.id}
                >
                  <div className="cart-item-info">
                    <h2>{item.product.name}</h2>

                    <p>{item.product.description}</p>
                  </div>

                  <div className="cart-item-quantity">
                    <span>Cantidad</span>
                    <strong>{item.quantity}</strong>
                  </div>

                  <div className="cart-item-price">
                    <span>Subtotal</span>

                    <strong>
                      $
                      {(
                        item.product.price * item.quantity
                      ).toLocaleString("es-CL")}
                    </strong>

                    <small>
                      ${item.product.price.toLocaleString("es-CL")} c/u
                    </small>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Resumen</h2>

              <div className="summary-row">
                <span>Productos</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  ${total.toLocaleString("es-CL")}
                </strong>
              </div>

              <button className="checkout-button">
                Continuar compra
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;