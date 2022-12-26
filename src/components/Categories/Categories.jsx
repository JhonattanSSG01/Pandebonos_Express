import React from "react";
import { Link } from "react-router-dom";
import FooterAll from "../Delivery/Delivery";
import Header from "../Header/Header";
import "./categories.css";

const Categories = (props) => {
  return (
    <>
      <Link to="/productos">
        <div className="card">
          <img src={props.url} alt="Imagen de la tarjeta" />
          <h2>{props.title}</h2>
        </div>
      </Link>
    </>
  );
};

export default Categories;
