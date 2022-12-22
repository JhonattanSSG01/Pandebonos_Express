import { React, useState } from "react";
import "./header.css";
import "../Nav_Icon/navIcon.css";
import img from "./assets/logo.jpeg";

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
            <a href="#" className="Cabecera-a">
              Item 1
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#" className="Cabecera-a">
              Item 2
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#" className="Cabecera-a">
              Item 3
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#" className="Cabecera-a">
              Item 4
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="#" className="Cabecera-a">
              Item 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
