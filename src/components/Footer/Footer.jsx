import React from "react";
import "./footer.css";
import Logo from "./assets/logo.jpeg";

export const FooterAll = _ => {
  return (
    <>
      <div className="socialMedia">
        <section className="address">
          <h5>
            Dirección: Carrera 75 # 0-30, Kennedy- Bogotá
            <br />
            Teléfonos: 4512484-2645013
          </h5>
        </section>
        <div className="copy">
          <section className="icons">
            <a
              href="https://es-la.facebook.com/pandebonoexpress/"
              target="_blank"
            >
              <span class="tooltip">Facebook</span>
              <i className="ri-facebook-circle-fill facebook"></i>
            </a>
            <a
              href="https://instagram.com/pandebonoexpress?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <span class="tooltip">Instagram</span>
              <i className="ri-instagram-line instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=573164724269&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <span class="tooltip">Whatsapp</span>
              <i className="ri-whatsapp-line whatsapp"></i>
            </a>
            <a href="https://goo.gl/maps/v64FSh71mJDjKA8V9" target="_blank">
              <span class="tooltip">Maps</span>
              <i className="ri-navigation-fill maps"></i>
            </a>
          </section>
          <section className="credits">
            <p>Pandebonos Express | 2022</p>
          </section>
        </div>
      </div>
    </>
  );
};

export const Footer = (_) => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          <img src={Logo} alt="logo de la microempresa" />
          <h3 className="titleFooter">
            Nuestro equipo está dispuesto a brindarle los mejores productos de
            queso y panadería.
          </h3>
          <FooterAll />
        </div>
      </footer>
    </>
  );
};
