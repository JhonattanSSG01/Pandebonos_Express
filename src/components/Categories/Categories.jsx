import React from "react";
import "./categories.css";
import Header from "../Header/Header";
import Product1 from "./assets/categoria1.jpg";
import Product2 from "./assets/categoria2.jpg";
import Product3 from "./assets/categoria3.jpg";
import { Link } from "react-router-dom";
import FooterAll from "../Delivery/Delivery";

const imagenes = [
  {
    id: 1,
    image: Product1,
    title: "Productos Elaborados"
  },
  {
    id: 2,
    image: Product2,
    title: "Insumos Para La Elaboracion"
  },
  {
    id: 3,
    image: Product3,
    title: "Combos Temporadas Especiales"
  },
];

const Categories = _ => {
  return (
    <>
      <Header />
      {imagenes.map((img, index) => {
        return (
          <Link to="/productos" className="link">
            <div className="card" key={index}>
              <img src={img.image} alt="Imagen de la tarjeta" />
              <h2>{img.title}</h2>
            </div>
          </Link>
        );
      })}
      <FooterAll />
    </>
  );
};

export default Categories;
