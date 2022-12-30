import { React } from "react";
import "./cartBuy.css";

//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";
import ReactWhatsapp from "react-whatsapp";

export const CartBuy = () => {
  //Reduce
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.precioPequeño * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <>
      <Header />

      <div className="global">
        <h2
          style={{
            margin: "3rem 0 1rem 0",
            textAlign: "center",
            color: "var(--colorGlobal)",
            fontSize: "2rem",
          }}
        >
          Pedido
        </h2>
        <section className="containerCart">
          {cart.map((product) => {
            return (
              <div className="inCart" key={product.id}>
                <section className="imageCart">
                  <img src={product.productsUrl} alt="Imagen del producto" />
                </section>
                <section className="textContainer">
                  <h3 className="nameCart">{product.title}</h3>
                  <p className="textCart">Precio ${product.precioPequeño}</p>
                </section>
                <button
                  className="delete"
                  onClick={() => dispatch({ type: "REMOVE", payload: product })}
                >
                  <i className="ri-delete-bin-6-line icon"></i>
                </button>
                <section className="quatity">
                  <button
                    onClick={() => {
                      if (product.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: product });
                      } else {
                        dispatch({ type: "REMOVE", payload: product });
                      }
                    }}
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: product })
                    }
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </section>
              </div>
            );
          })}
        </section>
        <div className="amount">{total > 0 && <h2>Total a pagar: <span>${total}</span></h2>}</div>
      <ReactWhatsapp className="wp"
        number="57-319-678-8028"
        message={`Hello World!!! ${cart.map(
          (item) => item.quantity + " " + item.title
        )} para $${total}`}
      >
        Realizar Pedido
      </ReactWhatsapp>
      
      </div>
      <FooterAll />
    </>
  );
};
