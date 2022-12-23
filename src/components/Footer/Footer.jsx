import React from "react";
import "./footer.css";
import Logo from "./assets/logo.jpeg";
import FooterAll from "../Delivery/Delivery";

const Footer = _ => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          <img src={Logo} alt="logo de la microempresa" />
          <h3 className="titleFooter">
            Nuestro equipo está dispuesto a brindarle los mejores productos de
            queso y panadería.
          </h3>
          <FooterAll/>
        </div>
      </footer>
    </>
  );
};

export default Footer;