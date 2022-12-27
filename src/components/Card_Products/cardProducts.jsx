import React from "react";
import "./CardProducts.css";

const CardProducts = (props) => {
  return (
    <div className="containerProducts">
      <div className="image">
        <section>
          <img src={props.url} alt="Imagen del producto" />
        </section>
        <p className="text">{props.text}</p>
      </div>
      <h3 className="name">{props.title}</h3>
      <div className="price">
        <section>
          <h4 className="size">{props.pequeño}</h4>
          <button className="buttonAdd">{props.precioPequeño}</button>
        </section>
        <section>
          <h4 className="size">{props.mediano}</h4>
          <button className="buttonAdd">{props.precioMediano}</button>
        </section>
        <section>
          <h4 className="size">{props.grande}</h4>
          <button className="buttonAdd">{props.precioGrande}</button>
        </section>
      </div>
    </div>
  );
};

export default CardProducts;
