import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';

export const App = () => (
  <>
    <Header />
    <RouterProvider router = {router} />
    <Footer />
  </>
);

const router = createBrowserRouter ([
  {
      path: '/',
      element: <Home />
  },
  {
      path: '/reservation/:id',
      element: <Reservation />
  }
])
