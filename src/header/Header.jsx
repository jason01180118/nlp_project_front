import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [focus, setFocus] = useState(-1);
  const barList = [
    { title: '模型展示', classes: [{ title: '單分類', to: '/index/0' }, { title: '複選分類', to: '/index/1' }] },
    { title: 'hackmd doc', classes: [{ title: '資料', to: '/doc/jason/PjXhTaQaRR-rY7lYs8Hthw' }, { title: '單分類模型doc', to: '/doc/banana/T1YsClt_QG23hB_TdZTASg' }, { title: '複選分類模型doc', to: '/doc/gary/L-J88pjeSQy8_2V2F09oBQ' }] },
  ];
  const hrefs = [
    { href: 'https://github.com/jason01180118/nlp_project_front', title: 'frontend' },
    { href: 'https://github.com/hapiwangy/prediction_api', title: 'backend' },
    { href: 'http://localhost:3000/', title: 'model' },
  ];

  return (
    <ul className="h-[10%] w-full border-b shadow-sm flex items-center">
      <ul className="w-[40%] h-full ml-[5%] flex items-center">
        <Link className="fontsize-title px-[5%]" to="/">ESG Classify</Link>
        {barList.map((listItem, listIndex) => (
          <ul key={listItem.title} className="hover:bg-[#FFFFD4] h-full w-[25%]" onMouseEnter={() => { setFocus(listIndex); }} onMouseLeave={() => { setFocus(-1); }}>
            <li className="h-full flex justify-center items-center cursor-pointer">
              <p className="fontsize-content ">{listItem.title}</p>
            </li>
            <ul className="relative border-2 border-gray-300 bg-white" style={{ display: listIndex === focus ? 'block' : 'none' }}>
              {listItem.classes.map((item) => (
                <Link key={item.title} to={item.to}>
                  <li className=" hover:bg-gray-100">
                    <span className="fontsize-content">
                      {item.title}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>

          </ul>
        ))}
      </ul>
      <ul className="w-[35%] ml-[5%] flex justify-evenly">
        {hrefs.map((item) => <li key={item.title}><a className="fontsize-content" href={item.href} target="_blank" rel="noreferrer">{item.title}</a></li>)}
      </ul>

    </ul>
  );
}

export default Header;
