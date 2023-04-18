import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Doc() {
  const [doc, setDoc] = useState('');
  const getDoc = async () => {
    await fetch('https://cors-anywhere.herokuapp.com/https://api.hackmd.io/v1/notes/PjXhTaQaRR-rY7lYs8Hthw', { headers: { Authorization: process.env.REACT_APP_HACKMD_API, 'X-Requested-With': 'XMLHttpRequest' } })
      .then((response) => response.json())
      .then((data) => {
        setDoc(data.content);
      })
      .catch((err) => {
        setDoc(err.message);
      });
  };
  useEffect(() => {
    getDoc();
  }, []);

  useEffect(() => { console.log(doc); }, [doc]);

  return (
    <div className="py-[3%] h-[90%] w-full bg-gray-300 overflow-y-auto">
      <div className="mx-[10%] bg-white rounded-xl flex flex-col">
        <div className="m-[3%] w-full">
          <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>{doc}</ReactMarkdown>
        </div>

      </div>
    </div>
  );
}

export default Doc;
