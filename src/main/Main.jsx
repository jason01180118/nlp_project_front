import React, { useState, useContext } from 'react';
import Mode from '../Mode';

function Main() {
  const { mode } = useContext(Mode);
  const [title, setTitle] = useState('');
  const [result, setResult] = useState('');
  const addPosts = async (sentence) => {
    let api;
    switch (mode) {
      case 0:
        api = 'http://127.0.0.1:5051';
        break;
      case 1:
        api = 'http://127.0.0.1:5051';
        break;
      case 2:
        api = 'http://127.0.0.1:5051';
        break;
      default:
        api = null;
        break;
    }
    await fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        sent: sentence,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setResult(data.result))
      .catch((err) => {
        console.log(err.message);
        setResult(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title);
  };

  return (
    <div className="py-[3%] h-[90%] w-full bg-gray-300 overflow-y-auto">
      <div className="mx-[10%] bg-white rounded-xl flex flex-col">
        <div className="m-[3%]">
          <p className="fontsize-title">NLP專題-ESG分類</p>
        </div>
        <div className="mx-[3%]">
          <div className="my-[1%]">
            <p className="fontsize-content">請輸入一段文字:</p>
          </div>

          <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
            <textarea className="mb-[2%] border rounded border-gray-300" rows="6" cols="30" name="text" placeholder="example" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input className="mx-[40%] cursor-pointer fontsize-added border rounded border-gray-300" type="submit" value="Send Request" />
          </form>
        </div>
        <div className="m-[3%]">
          <div className="my-[1%]">
            <p className="fontsize-content">模型預測結果:</p>
          </div>

          <div className="div-result">
            <p className="fontsize-added" id="result">{result}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
