import React, { useState, useContext } from 'react';
import styles from './Main.css';
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
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title);
  };

  return (
    <div className="h-[90%] w-full">
      <div className={styles.title}>
        <p className="title">NLP專題-ESG分類</p>
      </div>
      <div className="div-content">
        <p className="content">請輸入一段文字:</p>
        <form onSubmit={handleSubmit}>
          <textarea rows="6" cols="30" name="text" placeholder="example" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="submit" value="Send Request" />
        </form>
        <p className="content">模型預測結果:</p>
        <div className="div-result">
          <p id="result">{result}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
