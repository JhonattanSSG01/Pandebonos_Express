import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Data from './Data.json';
import Header from './components/Header/Header';
import FooterAll from './components/Footer/FooterAll';

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
          Data.map(info => {
            return (
              <Categories
                key={info.id}
                url={info.url}
                title={info.title}
              />
            )
          })
        }
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
