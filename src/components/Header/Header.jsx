import { React, useState } from "react";
import "./header.css";
import "../Nav_Icon/navIcon.css";
import img from "./assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="Cabecera">
      <div className="headerContainer">
        <img className="logo" src={img} alt="logo de la microempesa" />
        <div className="iconNav">
          <button onClick={toggleMenu} className="Cabecera-button">
            <i className="ri-function-line icon" />
          </button>
        </div>
      </div>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <Link to="/home" className="href">
              Inicio
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/categories" className="href">
              Categorias
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/questions" className="href">
              FAQ
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/delivery" className="href">
              Pedido
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
