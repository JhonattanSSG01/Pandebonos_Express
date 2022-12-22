import { React, useState } from "react";
import "./navIcon.css";

const Nav_Icon = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="Cabecera">

      <button onClick={toggleMenu} className="Cabecera-button">
        <i className="ri-function-line icon"/>
      </button>

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

export default Nav_Icon;
