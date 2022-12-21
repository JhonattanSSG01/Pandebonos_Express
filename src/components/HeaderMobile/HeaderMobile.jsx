import React from 'react';
import './headerMobile.css';
import img from './assets/logo.jpeg';


const HEADER_MOBILE = _ => {
  return (
    <>
      <header>
        <div className="headerContainer">
          <img className="logo" src={img} alt="logo de la microempesa" />
          <div className="iconNav">
            <i className="ri-function-line icon"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default HEADER_MOBILE;