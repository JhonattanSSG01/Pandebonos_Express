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
                Pregunta? <i className="ri-arrow-right-s-line"></i>
              </summary>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                assumenda pariatur molestias odit aliquam, dolorum ducimus quasi
                quos asperiores quod veritatis consectetur qui alias fugiat
                saepe nulla quo similique provident.
              </p>
            </details>
          </article>
          <article>
            <details>
              <summary className="questions">
                {" "}
                Pregunta? <i className="ri-arrow-right-s-line"></i>
              </summary>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                assumenda pariatur molestias odit aliquam, dolorum ducimus quasi
                quos asperiores quod veritatis consectetur qui alias fugiat
                saepe nulla quo similique provident.
              </p>
            </details>
          </article>
          <article>
            <details>
              <summary className="questions">
                {" "}
                Pregunta? <i className="ri-arrow-right-s-line"></i>
              </summary>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                assumenda pariatur molestias odit aliquam, dolorum ducimus quasi
                quos asperiores quod veritatis consectetur qui alias fugiat
                saepe nulla quo similique provident.
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
            <button className="buttonInfo">Solicitar Información</button>
          </section>
        </section>
      </div>
      <FooterAll />
    </>
  );
};

export default Faq;
