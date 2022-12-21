import React from "react";
import "./footerHome.css";
import Logo from "./assets/logo.jpeg";

const FOOTER_HOME = _ => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          <img src={Logo} alt="logo de la microempresa" />
          <h3 className="titleFooter">
            Nuestro equipo está dispuesto a brindarle los mejores productos de
            queso y panadería.
          </h3>
          <div className="socialMedia">
            <section className="address">
              <h5>
                Dirección: Carrera 75 # 0-30, Kennedy- Bogotá
                <br />
                Teléfonos: 4512484-2645013
              </h5>
            </section>
            <section className="icons">
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-whatsapp-line"></i>
            </section>
            <section className="credits">
              <p>Pandebonos Express | 2022</p>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FOOTER_HOME;