import React, { useState, useEffect } from 'react';

function Doc() {
  const [doc, setDoc] = useState('');
  const [API, setAPI] = useState(process.env.REACT_APP_HACKMD_API);

  useEffect(() => {
    setAPI('Bearer 4GWX9B9QO2RZ8VZSJ4FRUXJBV8UJDRWI6OHKQE81YKQUPHHA6T');
    console.log(API);
    const getDoc = async () => {
      console.log('get');

      await fetch('https://api.hackmd.io/v1/notes/PjXhTaQaRR-rY7lYs8Hthw', { headers: { Authorization: 'Bearer 4GWX9B9QO2RZ8VZSJ4FRUXJBV8UJDRWI6OHKQE81YKQUPHHA6T' } })
        .then((response) => response.json())
        .then((data) => {
          setDoc(data.content);
          console.log(data);
        })
        .catch((err) => {
          setDoc(err.message);
        });
    };
    getDoc();
  }, [API]);

  return (
    <div className="py-[3%] h-[90%] w-full bg-gray-300 overflow-y-auto">
      <div className="mx-[10%] bg-white rounded-xl flex flex-col">
        <div className="m-[3%]">
          <p className="fontsize-title">{doc}</p>
        </div>

      </div>
    </div>
  );
}

export default Doc;
