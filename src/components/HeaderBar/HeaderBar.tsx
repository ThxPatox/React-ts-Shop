import CartButton from "../CartButton/CartButton";

import "./HeaderBar.css";

function HeaderBar() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-brand">
          <span>Gaming & Hardware</span>

          <h1>Mi E-Shop</h1>

          <p>
            Encuentra hardware y accesorios para llevar
            tu setup al siguiente nivel.
          </p>
        </div>

        <CartButton />
      </div>
    </header>
  );
}

export default HeaderBar;