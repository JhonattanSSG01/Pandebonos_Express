import React from 'react';
import './headerMobile.css';
import img from './assets/logo.jpeg';

const HEADER_MOBILE = _ => {
  return <>
  <header>
    <div className="headerContainer">
      <img className='logo' src={img} alt="logo de la microempesa" />
      <div className="iconNav"></div>
    </div>
      {/* <h1 style={{fontFamily: 'var(--fontPrincipal)', color: 'var(--colorText)', fontSize: '20px', margin: '0px'}}>Pandebonos Express</h1> */}
  </header>
  </>
}

export default HEADER_MOBILE;