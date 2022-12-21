import React from 'react';
import './home.css';
import Welcome from './assets/welcome.jpg';
import Products1 from './assets/categoria1.jpg';
import Products2 from './assets/categoria2.jpg';

const HOME = _ => {
  return (
    <>
      <main>
        <div className="legendWelcome">
          <img src={Welcome} alt="Imagen de Bienvenida" />
          <h1 className="title">Pandebono Express</h1>
          <h3 className="subtitle">La felicidad huele Amasijo recién hecho</h3>
        </div>
        <p className="text">
          Desarrollar, elaborar y comercializar productos a base de queso y
          bebidas típicas acompañantes que nos permiten cutivar a nuestros
          clientes con productos frescos y calienticos. <br />
          <br /> Buscamos el desarrollo y el lograr de nuestros objetivos
          empresariales que permitan mejorar la calidad de vida de nuestros
          colaboradores y asegurar la rentabilidad de nuestros inversionistas.
        </p>
        <h1 className="title">Nuestros Productos</h1>
        <div className="products">
          <img className='products1' src={Products1} alt="Imagen alusiva a los productos elaborados" />
          <img className='products2' src={Products2} alt="Imagen alusiva a los productos elaborados" />
        </div>
        <a className='buttonProducts'>Productos</a>
      </main>
    </>
  );
}

export default HOME;