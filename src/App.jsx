import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import './index.css';
import Mode from './Mode';

function App() {
  const [mode, setMode] = useState(0);
  const modeValue = useMemo(() => ({ mode, setMode }));
  return (
    <div className="absolute w-full h-full">
      <Mode.Provider value={modeValue}>
        <Header />
        <Outlet />
      </Mode.Provider>

    </div>
  );
}

export default App;
