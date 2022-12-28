import { React, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { CartBuy } from "./components/Cart_Buy/CartBuy";
import { CardProducts } from './components/Card_Products/cardProducts';


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <CartBuy
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <CardProducts
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Home />

    </>
  );
}

export default App;