import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import { CardProducts } from './components/Card_Products/cardProducts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Faq from './components/Questions/Questions';

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
    path: '/questions',
    element: <Faq />
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
