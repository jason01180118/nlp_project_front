import React, { useContext } from 'react';
import Mode from '../Mode';

function Header() {
  const { setMode } = useContext(Mode);
  function changeMode(val: number) {
    setMode(val)
  }

  return (
    <div className="h-[10%] w-full border-b shadow-sm flex justify-between items-center">
      <div className="w-[50%] ml-[5%] flex justify-evenly">
        <p className="fontsize-title">ESG Classify</p>
        <button className="fontsize-content" type="button" onClick={() => changeMode(0)}>單分類</button>
        <button className="fontsize-content" type="button" onClick={() => changeMode(1)}>多分類</button>
        <button className="fontsize-content" type="button" onClick={() => changeMode(2)}>複選分類</button>
      </div>
      <div className="w-[35%] ml-[5%] flex justify-evenly">
        <a className="fontsize-content" href="https://github.com/jason01180118/nlp_project_front" target="_blank" rel="noreferrer">frontend</a>
        <a className="fontsize-content" href="http://localhost:3000/" target="_blank" rel="noreferrer">backend</a>
        <a className="fontsize-content" href="http://localhost:3000/" target="_blank" rel="noreferrer">model</a>
      </div>

    </div>
  );
}

export default Header;
