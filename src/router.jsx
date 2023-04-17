import {
  createBrowserRouter,
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
        element: <Main />,
      },
      {
        path: 'doc',
        element: <Doc />,
      },
    ],
  },
]);

export default router;
