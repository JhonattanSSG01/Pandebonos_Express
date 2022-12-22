import React from 'react';
import './App.css';
import './components/Home/home.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <Home />
      <Link to='/categories' className="buttonProducts">
        Productos
      </Link>
      <Footer/>
    </>
  );
}

export default App;