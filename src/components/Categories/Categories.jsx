import React from 'react';
import './categories.css';
import Header from '../Header/Header';
// import Product1 from './assets/categoria1';
// import Product2 from './assets/categoria2';
// import Product3 from './assets/categoria3';
import { Link } from "react-router-dom";

const Categories = _ => {
  return (
    <>
      <Header />
      <Link to="/">
        Home
      </Link>
    </>
  );
}

export default Categories;