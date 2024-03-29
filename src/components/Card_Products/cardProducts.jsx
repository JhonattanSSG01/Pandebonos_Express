import { React, useState } from "react";
import "./CardProducts.css";
import { DataProducts } from "../../Data/data";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";
import CategorieAll from "./assets/all.jpg";
import Categorie1 from "./assets/categoria1.jpg";
import Categorie2 from "./assets/categoria2.jpg";
import Categorie3 from "./assets/categoria3.jpg";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";
//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from "react-redux";

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
      <h2 className="titlePrincipal">Nuestros Productos</h2>
      <div className="filters">
        <button
          onClick={() => {
            setData(DataProducts);
          }}
        >
          <div className="card">
            <img src={CategorieAll} alt="Imagen de la tarjeta" />
            <h2 className="text">Todos</h2>
          </div>
        </button>
        <button
          onClick={() => {
            filterSection("Productos Elaborados");
          }}
        >
          <div className="card">
            <img src={Categorie1} alt="Imagen de la tarjeta" />
            <h2 className="textC">
              Productos <span>Elaborados</span>
            </h2>
          </div>
        </button>
        <button
          onClick={() => {
            filterSection("Insumos Para La Elaboración");
          }}
        >
          <div className="card">
            <img src={Categorie2} alt="Imagen de la tarjeta" />
            <h2 className="textC">
              Insumos <span>Para Elaboración</span>
            </h2>
          </div>
        </button>
        <button
          onClick={() => {
            filterSection("Combos Temporadas Especiales");
          }}
        >
          <div className="card">
            <img src={Categorie3} alt="Imagen de la tarjeta" />
            <h2 className="textC">
              Combos <span> Especiales</span>
            </h2>
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
                  <h4 className="size">{product.sizeTitle}</h4>
                  <button
                    onClick={() => {
                      dispatch({ type: "ADD", payload: product });
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${product.title} agregado`,
                        text: "Has añadido correctamente el producto al carrito",
                        showClass: {
                          popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                          popup: "animate__animated animate__fadeOutUp",
                        },
                        showConfirmButton: false,
                        timer: 1000,
                      });
                    }}
                    className="buttonAdd"
                  >
                    {product.category === "Productos Elaborados"
                      ? `${product.size} || $${product.price} `
                      : `$${product.price}`}
                  </button>
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
