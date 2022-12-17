import React from 'react';
import './headerMobile.css';
import img from '../../assets/welcome.jpg';

const HEADER_MOBILE = _ => {
  return <>
  <header>
    <div className="headerContainer">
    </div>
      <img src={img} alt="" style={{width: '95vw', margin: '1rem 0'}} />
      <h1 style={{fontFamily: 'var(--fontPrincipal)', color: 'var(--colorText)', fontSize: '20px', margin: '0px'}}>Pandebonos Express</h1>
  </header>
  </>
}

export default HEADER_MOBILE