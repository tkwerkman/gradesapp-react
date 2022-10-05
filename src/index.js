import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorPage from './routes/error';
import Root from './routes/root';
import Shots, { loader as shotsLoader } from './routes/shots';
import Slopes, { loader as slopesLoader } from './routes/slopes';
import Info, { loader as infoLoader } from './routes/info';
import Landing from './routes/landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/shots/:displayID',
        element: <Shots />,
				loader: shotsLoader,
      },
      {
        path: '/slopes/:displayID',
        element: <Slopes />,
        loader: slopesLoader,
      },
      {
        path: '/info/:displayID',
        element: <Info />,
        loader: infoLoader,
      },
      {
        path: '/',
        element: <Landing />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
