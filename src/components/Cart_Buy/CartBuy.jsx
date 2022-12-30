import { React } from "react";
import "./cartBuy.css";

//import useSelector and useDispatch from redux
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { FooterAll } from "../Footer/Footer";

export const CartBuy = () => {
  //Reduce
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
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
        Pedido
      </h2>
      <div className="containerCart">
        {cart.map((product) => {
          return (
            <div className="inCart" key={product.id}>
              <section className="imageCart">
                <img src={product.productsUrl} alt="Imagen del producto" />
              </section>
              <section className="textContainer">
                <h3 className="nameCart">{product.title}</h3>
                <p className="textCart">$ {product.precioPequeño}</p>
              </section>
              <i className="ri-delete-bin-6-line icon"></i>
              <section className="quatity">
                <i className="ri-subtract-line"></i>
                <p>{product.quantity}</p>
                <i className="ri-add-line"></i>
              </section>
            </div>
          );
        })}
      </div>
      <FooterAll />
    </>
  );
};
//   allProducts,
//   setAllProducts,
//   total,
//   countProducts,
//   setCountProducts,
//   setTotal,
// }) => {
//   const [active, setActive] = useState(false);

//   const onDeleteProduct = (product) => {
//     const results = allProducts.filter((item) => item.id !== product.id);

//     setTotal(total - product.precioPequeño * product.quantity);
//     setCountProducts(countProducts - product.quantity);
//     setAllProducts(results);
//   };

//   const onCleanCart = (_) => {
//     setAllProducts([]);
//     setTotal(0);
//     setCountProducts(0);
//   };

//   return (
//     <div className="container icon">
//       <div className="container-cart-icon" onClick={() => setActive(!active)}>
//         <i
//           className="ri-shopping-cart-line"
//         ></i>
//         <div className="count-products">
//           <span id="contador-productos">{countProducts}</span>
//         </div>
//       </div>

//       <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
//         {allProducts.length ? (
//           <>
//             <div className="row-product">
//               {allProducts.map((product) => (
//                 <div className="cart-product" key={product.id}>
//                   <div className="info-cart-product">
//                     <span className="cantidad-producto-carrito">
//                       {product.quantity}
//                     </span>
//                     <p className="titulo-producto-carrito">{product.title}</p>
//                     <span className="precio-producto-carrito">
//                       ${product.precioPequeño}
//                     </span>
//                   </div>
//                   <i
//                     className="ri-delete-bin-6-line"
//                     onClick={() => onDeleteProduct(product)}
//                     style={{ fontSize: "2rem" }}
//                   ></i>
//                 </div>
//               ))}
//             </div>

//             <div className="cart-total">
//               <h3>Total:</h3>
//               <span className="total-pagar">${total}</span>
//             </div>

//             <button className="btn-clear-all" onClick={onCleanCart}>
//               Vaciar Carrito
//             </button>
//           </>
//         ) : (
//           <p className="cart-empty">El carrito está vacío</p>
//         )}
//       </div>
//     </div>
//   );
