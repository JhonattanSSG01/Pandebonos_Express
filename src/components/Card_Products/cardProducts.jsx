import { React, useState } from "react";
import "./CardProducts.css";
import "../Categories/categories.css";
import { DataProducts } from "../../Data/data";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";
import Categorie1 from "https://drive.google.com/uc?export=view&id=1iOf1ZAbdK2tfFb9DrXcrXSwbbkdS98Q4"

//import useSelector and useDispatch from redux
import {useSelector, useDispatch}from 'react-redux'

export const CardProducts = () => {
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
                  <img src={product.productsUrl} alt="Imagen del producto" />
                </section>
                <p className="text">{product.text}</p>
              </div>
              <h3 className="name">{product.title}</h3>
              <div className="price">
                <section>
                  <h4 className="size">{product.pequeño}</h4>
                  <button
                    onClick={() => dispatch({ type: "ADD", payload: product })}
                    className="buttonAdd"
                  >{`20g || $${product.precioPequeño}`}</button>
                </section>
                <section>
                  <h4 className="size">{product.mediano}</h4>
                  <button
                    onClick={() => dispatch({ type: "ADD", payload: product })}
                    className="buttonAdd"
                  >{`40g || $${product.precioMediano}`}</button>
                </section>
                <section>
                  <h4 className="size">{product.grande}</h4>
                  <button
                    onClick={() => dispatch({ type: "ADD", payload: product })}
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

export const CardInsumos = () => {
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
        Insumos Elaborados
      </h2>
      <div
        className="containerGlobal"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {DataProducts.map((product) => {
          if (product.category === "Insumos Para La Elaboración") {
            return (
              <div className="containerProducts" key={product.id}>
                <div className="image">
                  <section>
                    <img src={product.productsUrl} alt="Imagen del producto" />
                  </section>
                  <p className="text">{product.text}</p>
                </div>
                <h3 className="name">{product.title}</h3>
                <div className="price">
                  <section>
                    <h4 className="size">{product.kiloUno}</h4>
                    <button className="buttonAdd">{`$${product.precioKiloUno}`}</button>
                  </section>
                  <section>
                    <h4 className="size">{product.kiloDos}</h4>
                    <button className="buttonAdd">{`$${product.precioKiloDos}`}</button>
                  </section>
                  <section>
                    <h4 className="size">{product.kiloTres}</h4>
                    <button className="buttonAdd">{`$${product.precioKiloTres}`}</button>
                  </section>
                </div>
              </div>
            );
          }
        })}
      </div>
      <FooterAll />
    </>
  );
};
