import { useState, useEffect, React} from "react";
import { Link } from "react-router-dom";
import "./categories.css";
import { DataProducts } from "../../Data/data";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";

const Categories = _ => {
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

        {DataProducts.map((item) => {
          if (item.id === 1001 || item.id === 2001 || item.id === 3001) {
            return (
              <Link
                to="/productos"
              >
                <div className="card">
                  <img src={item.categoryUrl} alt="Imagen de la tarjeta" />
                  <h2>{item.category}</h2>
                </div>
              </Link>
            );
          };
        })
        };
      <FooterAll />
    </>
  );
};

export default Categories;
