import React, { useContext } from 'react';
import Mode from '../Mode';

function Header() {
  const { setMode } = useContext(Mode);
  function changeMode(val) {
    setMode(val);
  }

  return (
    <div className="h-[10%] w-full border-b shadow-sm flex justify-between items-center">
      <div className="w-[50%] ml-[5%] flex justify-evenly">
        <p className="text-2xl">ESG Classify</p>
        <button className="text-lg md:text-base" type="button" onClick={() => changeMode(0)}>ESG單分類模型</button>
        <button className="text-lg md:text-base" type="button" onClick={() => changeMode(1)}>ESG多分類模型</button>
        <button className="text-lg md:text-base" type="button" onClick={() => changeMode(2)}>複選分類模型</button>
      </div>
      <div className="w-[30%] ml-[5%] flex justify-evenly">
        <a className="text-lg" href="http://localhost:3000/" target="_blank" rel="noreferrer">frontend</a>
        <a className="text-lg" href="http://localhost:3000/" target="_blank" rel="noreferrer">backend</a>
        <a className="text-lg" href="http://localhost:3000/" target="_blank" rel="noreferrer">model</a>
      </div>

    </div>
  );
}

export default Header;
