import React from "react";
import "../Footer/Footer";

const FooterAll = _ => {
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
        <section className="icons">
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-whatsapp-line"></i>
          <i className="ri-navigation-fill"></i>
        </section>
        <section className="credits">
          <p>Pandebonos Express | 2022</p>
        </section>
      </div>
      ;
    </>
  );
};

export default FooterAll;


