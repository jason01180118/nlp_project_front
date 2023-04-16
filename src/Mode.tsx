import React from 'react';

interface modeState {
  mode: Number;
  setMode: React.Dispatch<React.SetStateAction<number>>;
}

const Mode = React.createContext<modeState>({
  mode:0, 
  setMode:()=>{}
});

export default Mode;
