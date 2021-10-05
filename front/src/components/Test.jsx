import React, { useState, useEffect } from 'react';

export default function Test() {
  const [datas, setDatas] = useState([]);

//  useEffect(() => {
//    fetch('http://localhost:1337', {
//      mode: 'no-cors',
//      headers: {
//        "Content-Type": "application/json"
//      }
//    })
//    .then(res => res.json())
//    .then(data => setDatas(data[1]))
//  }, []);

  function fetchData(){
    const url = "http://localhost:1337";
    fetch(url, {
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setDatas(datas => [...data]);
    })
  }

  console.log(datas);
  return (
    <>
    <button type="button" onClick={fetchData}>fetch</button>
      <ul>
      </ul>
    </>
  ) 
};

