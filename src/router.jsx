import {
  createBrowserRouter, Navigate,
} from 'react-router-dom';
import React from 'react';
import App from './App';
import Main from './main/MainPage';
import Doc from './doc/DocPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/index/0" />,
      },
      {
        path: '/index/:id',
        element: <Main />,
      },
      {
        path: 'doc/:name/:id',
        element: <Doc />,
      },
    ],
  },
]);

export default router;
