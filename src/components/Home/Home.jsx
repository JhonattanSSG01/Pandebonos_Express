import React from "react";
import "./home.css";
import Welcome from "./assets/welcome.jpg";
import Products1 from "./assets/categoria1.jpg";
import Products2 from "./assets/categoria2.jpg";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = _ => {
  return (
    <>
      <Header />
      <main>
        <div className="legendWelcome">
          <img
            data-aos="zoom-in"
            data-aos-duration="2000"
            src={Welcome}
            alt="Imagen de Bienvenida"
          />
          <section>
            <h1 className="title">Pandebono Express</h1>
            <h3 className="subtitle animate__animated animate__flash">
              La felicidad huele Amasijo recién hecho
            </h3>
          </section>
        </div>
        <p className="textPrincipal">
          Desarrollar, elaborar y comercializar productos a base de queso y
          bebidas típicas acompañantes que nos permiten cautivar a nuestros
          clientes con productos frescos y calientes.
          <br />
          <br />
          Buscamos el desarrollo y el lograr de nuestros objetivos empresariales
          que permitan mejorar la calidad de vida de nuestros colaboradores y
          asegurar la rentabilidad de nuestros inversionistas.
        </p>
        <h1 className="title">Nuestros Productos</h1>
        <div className="products">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            className="products1 productsImg"
            src={Products1}
            alt="Imagen alusiva a los productos elaborados"
          />
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="200"
            className="products2 productsImg"
            src={Products2}
            alt="Imagen alusiva a los productos elaborados"
          />
        </div>
        <div className="buttonProducts">
          <Link to="/productos" className="button">
            Productos
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
