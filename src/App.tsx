import React, { useMemo, useState } from 'react';
import Main from './main/Main';
import Header from './header/Header';
import './index.css';
import Mode from './Mode';

function App() {
  const [mode, setMode] = useState(0);
  return (
    <div className="absolute w-full h-full">
      <Mode.Provider value={{mode, setMode}}>
        <Header />
        <Main />
      </Mode.Provider>

    </div>
  );
}

export default App;
