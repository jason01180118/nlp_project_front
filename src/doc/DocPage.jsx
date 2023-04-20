import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Doc() {
  const [doc, setDoc] = useState('');
  const params = useParams();

  const getAuth = () => {
    switch (params.name) {
      case 'jason':
        return process.env.REACT_APP_jason_HACKMD_API;
      case 'banana':
        return process.env.REACT_APP_banana_HACKMD_API;
      case 'gary':
        return process.env.REACT_APP_gary_HACKMD_API;
      default:
        return 0;
    }
  };

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.hackmd.io/v1/notes/${params.id}`, { headers: { Authorization: getAuth(), 'X-Requested-With': 'XMLHttpRequest' } })
      .then((response) => response.json())
      .then((data) => {
        setDoc(data.content);
      })
      .catch((err) => {
        setDoc(err.message);
      });
  }, [params.id]);

  useEffect(() => { console.log(doc); }, [doc]);

  return (
    <div className="py-[3%] h-[90%] w-full bg-gray-300 overflow-y-auto">
      <div className="mx-[25%] bg-white rounded-xl flex flex-col">
        <div className="mx-[15%] my-[5%]">
          <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>{doc}</ReactMarkdown>
        </div>

      </div>
    </div>
  );
}

export default Doc;
