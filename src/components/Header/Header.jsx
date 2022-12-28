import { React, useState } from "react";
import "./header.css";
import img from "./assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);           
  };

  return (
    <header>
      <div className="headerContainer">
        <img className="logo" src={img} alt="logo de la microempesa" />
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
          <li className={`items ${menu ? "isActive" : "isNotActive"}`}>
            <Link onClick={toggleMenu} to="/delivery" className="href">
              Pedido
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
