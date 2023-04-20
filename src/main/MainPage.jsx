import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import selectJson from '../sent.json';

function Main() {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [result, setResult] = useState('');
  const [API, setAPI] = useState('');
  const [select, setSelect] = useState('');
  const params = useParams();
  const addPosts = async (sentence) => {
    await fetch(API, {
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
    addPosts(post);
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
    setPost(e.target.value);
  };

  useEffect(() => {
    switch (params.id) {
      case '0':
        setAPI(`${process.env.REACT_APP_API}/banana`);
        setTitle('單分類');
        break;
      case '1':
        setAPI(process.env.REACT_APP_API);
        setTitle('複選分類');
        break;
      default:
        break;
    }
  }, [params.id]);

  return (
    <div className="py-[3%] h-[90%] w-full bg-gray-300 overflow-y-auto">
      <div className="mx-[10%] bg-white rounded-xl flex flex-col">
        <div className="m-[3%]">
          <p className="fontsize-title">{title}</p>
        </div>
        <div className="mx-[3%]">
          <div className="my-[1%]">
            <p className="fontsize-content">請輸入一段文字:</p>
          </div>

          <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
            <select className="fontsize-added my-[1%] border-2" value={select} onChange={handleChange}>
              <option value="none" selected disabled hidden>請選擇選項</option>
              {selectJson.map((item, index) => (
                <option key={item} value={item}>
                  範例
                  {index}
                </option>
              ))}
            </select>
            <textarea className="mb-[2%] border rounded border-gray-300" rows="6" cols="30" name="text" placeholder="example" value={post} onChange={(e) => setPost(e.target.value)} required />
            <input className="mx-[40%] cursor-pointer fontsize-added border rounded border-gray-300" type="submit" value="Send Request" />
          </form>
        </div>
        <div className="m-[3%]">
          <div className="my-[1%]">
            <p className="fontsize-content">模型預測結果:</p>
            <p className="fontsize-added" id="result">{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
