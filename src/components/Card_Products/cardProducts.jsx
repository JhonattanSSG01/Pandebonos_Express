import React from 'react';
import './cardProducts.css';

const Products = props => {
  return (
    <div className="containerProducts">
      <div className="image">
        <img src={props.url} alt="Imagen del producto" />
        <p className="text">{props.text}</p>
        <h3 className="title">{props.title}</h3>
      </div>
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
}