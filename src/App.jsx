import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import './index.css';

function App() {
  return (
    <div className="absolute w-full h-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
