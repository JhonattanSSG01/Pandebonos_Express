import React from "react";

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
          <a
            href="https://es-la.facebook.com/pandebonoexpress/"
            target="_blank"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a
            href="https://instagram.com/pandebonoexpress?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=573164724269&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
          <a 
            href="https://goo.gl/maps/v64FSh71mJDjKA8V9" 
            target="_blank"
          >
            <i className="ri-navigation-fill"></i>
          </a>
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
