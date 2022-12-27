import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import FooterAll from './components/Footer/FooterAll';
import Products from './components/Card_Products/CardProducts';
import DataCategories from './DataCategories.json';
import DataProducts from './DataProducts.json';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/categories',
    element:
      <>
        <Header />
        <h2 style={{margin: '4rem 0', textAlign: 'center', color: 'var(--colorText)', fontSize: '2rem'}}>Productos</h2>
        {
          DataCategories.map(info => {
            return (
              <Categories
                key={info.id}
                url={info.url}
                title={info.title}
              />
            )
          })
        };
        <FooterAll />
      </>
  },
  {
    path: '/productos',
    element:
      <>
        <Header />
        <h2 style={{ margin: '4rem 0 2rem 0', textAlign: 'center', color: 'var(--colorText)', fontSize: '1.7rem' }}>Productos Elaborados</h2>
        {
          DataProducts.map(info => {
            return (
              <Products
                key={info.id}
                url={info.url}
                text={info.text}
                title={info.title}
                pequeño={info.pequeño}
                mediano={info.mediano}
                grande={info.grande}
                precioPequeño={info.precioPequeño}
                precioMediano={info.precioMediano}
                precioGrande={info.precioGrande}
              />
            )
          })
        };
        <FooterAll />
      </>
  },
  {
    path: '/',
    element: <App />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
