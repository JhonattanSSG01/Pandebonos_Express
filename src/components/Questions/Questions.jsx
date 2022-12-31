import React from "react";
import { FooterAll } from "../Footer/Footer";
import Header from "../Header/Header";
import "./questions.css";

const Faq = _ => {
  return (
    <>
      <Header />
      <div className="containerFaq">
        <h2
          style={{
            margin: "4rem 0 2rem 0",
            textAlign: "center",
            color: "var(--colorText)",
            fontSize: "2rem",
          }}
        >
          Preguntas Frecuentes
        </h2>
        <section className="listQuestions">
          <article>
            <details open>
              <summary className="questions">
                {" "}
                ¿Cuál es la mejor manera de almacenar los amasijos en casa para
                mantenerlos frescos? <i className="ri-arrow-right-s-line"></i>
              </summary>
              <p>
                Los amasijos se mantendrán frescos durante más tiempo si se
                almacenan en un lugar fresco y seco, como en una despensa o en
                un armario. También pueden envolverse en papel de aluminio o en
                una bolsa de plástico para ayudar a retener la humedad.
              </p>
            </details>
          </article>
          <article>
            <details>
              <summary className="questions">
                {" "}
                ¿Cuál es el proceso de producción de sus amasijos?{" "}
                <i className="ri-arrow-right-s-line"></i>
              </summary>
              <p>
                Es útil proporcionar información sobre el proceso de producción
                de los amasijos, como si son hechos a mano o utilizan máquinas,
                si utilizan ingredientes orgánicos o no, si utilizan productos
                lácteos, etc.
              </p>
            </details>
          </article>
          <article>
            <details>
              <summary className="questions">
                {" "}
                ¿Puedo hacer un pedido por adelantado y recogerlo más tarde en
                el día? <i className="ri-arrow-right-s-line"></i>
              </summary>
              <p>
                La mayoría de las tiendas de amasijos aceptan pedidos por
                adelantado y ofrecen la opción de recoger el pedido más tarde en
                el día. Es importante confirmar con la tienda si esta opción
                está disponible y si hay cualquier política de cancelación o
                cambio de pedido.
              </p>
            </details>
          </article>
        </section>
        <section className="message">
          <p>
            Si desea más información puede contactarse con nosotros y conocer
            más acerca de nuestro portafolio de productos.
          </p>
          <section className="containerButton">
            <button className="buttonInfo">
              <a href="https://api.whatsapp.com/send/?phone=573164724269&text&type=phone_number&app_absent=0" target="_blank"> Solicitar Información</a>
            </button>
          </section>
        </section>
      </div>
      <FooterAll />
    </>
  );
};

export default Faq;
