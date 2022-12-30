import { React, useState } from "react";
import "./CardProducts.css";
import "../Categories/categories.css";
import { DataProducts } from "../../Data/data";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";
import Categorie1 from "./assets/categoria1.jpg";
import Categorie2 from "./assets/categoria2.jpg";
import Categorie3 from "./assets/categoria3.jpg";

//import useSelector and useDispatch from redux
import { useSelector, useDispatch }from 'react-redux';

const CardProducts = () => {
  //Reduce
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const [data, setData] = useState(DataProducts);

  const filterSection = (sectionItem) => {
    const result = DataProducts.filter((item) => {
      return item.category === sectionItem;
    });
    setData(result);
  };
  return (
    <>
      <Header />
      <h2
        style={{
          margin: "4rem 0 2rem 0",
          textAlign: "center",
          color: "var(--colorText)",
          fontSize: "2rem",
        }}
      >
        Nuestros Productos
      </h2>
      <div className="filters">
        <button
          onClick={() => {
            filterSection("Productos Elaborados");
          }}
        >
          <div className="card">
            <img src={Categorie1} alt="Imagen de la tarjeta" />
            <h2>hola</h2>
          </div>
        </button>
        <button
          onClick={() => {
            filterSection("Insumos Para La Elaboración");
          }}
        >
          <div className="card">
            <img src={Categorie2} alt="Imagen de la tarjeta" />
            <h2>hola</h2>
          </div>
        </button>
        <button
          onClick={() => {
            filterSection("Combos Temporadas Especiales");
          }}
        >
          <div className="card">
            <img src={Categorie3} alt="Imagen de la tarjeta" />
            <h2>hola</h2>
          </div>
        </button>
      </div>
      <div
        className="containerGlobal"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {data.map((product) => {
          return (
            <div className="containerProducts" key={product.id}>
              <div className="image">
                <section>
                  <img
                    src={product.productsUrl}
                    alt="Imagen del producto"
                  />
                </section>
                <p className="text">{product.text}</p>
              </div>
              <h3 className="name">{product.title}</h3>
              <div className="price">
                <section>
                  <h4 className="size">{product.pequeño}</h4>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD", payload: product })
                    }
                    className="buttonAdd"
                  >{`20g || $${product.precioPequeño}`}</button>
                </section>
                <section>
                  <h4 className="size">{product.mediano}</h4>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD", payload: product })
                    }
                    className="buttonAdd"
                  >{`40g || $${product.precioMediano}`}</button>
                </section>
                <section>
                  <h4 className="size">{product.grande}</h4>
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD", payload: product })
                    }
                    className="buttonAdd"
                  >{`70g || $${product.precioGrande}`}</button>
                </section>
              </div>
            </div>
          );
        })}
      </div>
      <FooterAll />
    </>
  );
};

export default CardProducts;