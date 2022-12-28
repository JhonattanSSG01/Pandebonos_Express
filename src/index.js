import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import { FooterAll } from './components/Footer/Footer';
import {CardProducts} from './components/Card_Products/cardProducts';
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
    element: <Categories />
  },
  {
    path: '/productos',
    element: <CardProducts />
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
