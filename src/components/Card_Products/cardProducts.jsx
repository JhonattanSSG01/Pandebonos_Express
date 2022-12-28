import React from "react";
import "./CardProducts.css";
import DataProducts from "../../DataProducts.json";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";

export const CardProducts = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.precioPequeño * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.precioPequeño * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
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
          Productos Elaborados
        </h2>
      <div
        className="containerGlobal"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {DataProducts.map((product) => {
          return (
            <div className="containerProducts" key={product.id}>
              <div className="image">
                <section>
                  <img src={product.url} alt="Imagen del producto" />
                </section>
                <p className="text">{product.text}</p>
              </div>
              <h3 className="name">{product.title}</h3>
              <div className="price">
                <section>
                  <h4 className="size">{product.pequeño}</h4>
                  <button
                    onClick={() => onAddProduct(product)}
                    className="buttonAdd"
                  >{`20g || $${product.precioPequeño}`}</button>
                </section>
                <section>
                  <h4 className="size">{product.mediano}</h4>
                  <button
                    onClick={() => onAddProduct(product)}
                    className="buttonAdd"
                  >{`40g || $${product.precioMediano}`}</button>
                </section>
                <section>
                  <h4 className="size">{product.grande}</h4>
                  <button
                    onClick={() => onAddProduct(product)}
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
