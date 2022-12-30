import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Faq from './components/Questions/Questions';

//import redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//Import reducer component
import Reducer from './components/Reducer';
import { CardProducts } from './components/Card_Products/cardProducts';
const Store = createStore(Reducer);

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/categories',
    element: <Categories />
  },
  // {
  //   path: '/productos',
  //   element: <CardProducts />
  // },
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
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode >
);
