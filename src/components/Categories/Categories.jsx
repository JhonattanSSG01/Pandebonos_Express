import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";
import DataCategories from "../../DataCategories.json";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";

const Categories = props => {
  return (
    <>
      <Header />
      <h2
        style={{
          margin: "4rem 0",
          textAlign: "center",
          color: "var(--colorText)",
          fontSize: "2rem",
        }}
      >
        Productos
      </h2>
      {DataCategories.map((info) => {
        return (
          <Link to="/productos">
            <div className="card" key={info.id}>
              <img src={info.url} alt="Imagen de la tarjeta" />
              <h2>{info.title}</h2>
            </div>
          </Link>
        );
      })}
      <FooterAll />
      
    </>
  );
};

export default Categories;
