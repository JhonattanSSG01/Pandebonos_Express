import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <App/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
