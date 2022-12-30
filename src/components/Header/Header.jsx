import { React, useState } from "react";
import "./header.css";
import Logo from "./assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = (_) => {
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
              <Link to="/home" className="href">
                Inicio
              </Link>
            </li>
            <li className={`items ${menu ? "isActive" : "isNotActive"}`}>
              <Link to="/productos" className="href">
                Productos
              </Link>
            </li>
            <li className={`items ${menu ? "isActive" : "isNotActive"}`}>
              <Link to="/questions" className="href">
                FAQ
              </Link>
            </li>
            <li className={`items floatDt ${menu ? "isActive" : "isNotActive"}`}>
              <Link to="/carrito" className="href">
                <i className="ri-shopping-cart-fill icon"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="floatMb">
          <Link to="/carrito" className="href">
            <i className="ri-shopping-cart-fill icon"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
