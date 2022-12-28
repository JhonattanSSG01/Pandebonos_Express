import { React, useState } from "react";
import "./header.css";
import Logo from "./assets/logo.jpeg";
import { Link } from "react-router-dom";
import { CartBuy } from "../Cart_Buy/CartBuy";

const Header = _ => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header>
        <div className="headerContainer">
          <Link to="/home">
            <img className="logo" src={Logo} alt="logo de la microempesa" />
          </Link>
          <div className="iconNav">
            <button onClick={toggleMenu} className="buttonToggle">
              <i className="ri-function-line icon" />
            </button>
          </div>
        </div>

        <nav className={`nav ${menu ? "isActive" : ""}`}>
          <ul className="containerItems">
            <li className={`items ${menu ? "isActive" : "isNotActive"}`}>
              <Link onClick={toggleMenu} to="/home" className="href">
                Inicio
              </Link>
            </li>
            <li className={`items ${menu ? "isActive" : "isNotActive"}`}>
              <Link onClick={toggleMenu} to="/categories" className="href">
                Productos
              </Link>
            </li>
            <li className={`items ${menu ? "isActive" : "isNotActive"}`}>
              <Link onClick={toggleMenu} to="/questions" className="href">
                FAQ
              </Link>
            </li>
            <CartBuy
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;