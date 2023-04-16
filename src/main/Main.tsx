import React, { useState, useContext, useEffect } from 'react';
import Mode from '../Mode';

function Main() {
  const { mode } = useContext(Mode);
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [result, setResult] = useState('');
  const [API, setAPI] = useState('');
  const addPosts = async (sentence: string) => {
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
        setResult(err.message);
      });
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    addPosts(post);
  };

  useEffect(() => {
    console.log(mode)
    switch (mode) {
      case 0:
        setAPI(`${process.env.REACT_APP_API}/banana`);
        setTitle('單分類');
        break;
      case 1:
        setAPI(process.env.REACT_APP_API!);
        setTitle('多分類');
        break;
      case 2:
        setAPI(process.env.REACT_APP_API!);
        setTitle('複選分類');
        break;
      default:
        break;
    }
  }, [mode]);

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
            <textarea className="mb-[2%] border rounded border-gray-300" rows={6} cols={30} name="text" placeholder="example" value={post} onChange={(e) => setPost(e.target.value)} required />
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
