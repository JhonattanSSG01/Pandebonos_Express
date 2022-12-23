import React from "react";
import "./categories.css";
import Header from "../Header/Header";
import Product1 from "./assets/categoria1.jpg";
import Product2 from './assets/categoria2.jpg';
import Product3 from './assets/categoria3.jpg';
import { Link } from "react-router-dom";
import FooterAll from "../Delivery/Delivery";

const Categories = (_) => {
  return (
    <>
      <Header />
      <Link to="/">
        <div className="card">
          <img src={Product1} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="card">
          <img src={Product2} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="card">
          <img src={Product3} alt="" />
        </div>
      </Link>
      <FooterAll />
    </>
  );
};

export default Categories;
