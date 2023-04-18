import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Mode from '../Mode';

function Header() {
  const { setMode } = useContext(Mode);
  const [visible, setVisible] = useState(false);
  function changeMode(val) {
    setMode(val);
  }
  const classes = ['單分類', '多分類', '複選分類'];
  const hrefs = [
    { href: 'https://github.com/jason01180118/nlp_project_front', title: 'frontend' },
    { href: 'http://localhost:3000/', title: 'backend' },
    { href: 'http://localhost:3000/', title: 'model' },
  ];

  return (
    <ul className="h-[10%] w-full border-b shadow-sm flex items-center">
      <ul className="w-[40%] h-full ml-[5%] flex justify-evenly items-center">
        <p className="fontsize-title">ESG Classify</p>
        <ul className="hover:bg-[#FFFFD4] h-full" onMouseEnter={() => { setVisible(true); console.log(123); }} onMouseLeave={() => { setVisible(false); }}>
          <li className="h-full flex items-center cursor-pointer">
            <p className="fontsize-content">模型展示</p>
          </li>
          <ul className="relative" style={{ display: visible ? 'block' : 'none' }}>
            {classes.map((item, index) => <li key={item} className="border-b-2 border-white bg-[#FFFFD4]"><Link className="fontsize-content" onClick={() => changeMode(index)} to="/">{item}</Link></li>)}
          </ul>

        </ul>
        <Link className="fontsize-content" to="/doc">doc</Link>
      </ul>
      <ul className="w-[35%] ml-[5%] flex justify-evenly">
        {hrefs.map((item) => <li key={item.title}><a className="fontsize-content" href={item.href} target="_blank" rel="noreferrer">{item.title}</a></li>)}
      </ul>

    </ul>
  );
}

export default Header;
