import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 

export default function CreatePage() {
  const [formInput, setFormInput] = useState({});
  const history = useHistory();

  function handleChange(e){
    setFormInput({...formInput, [e.target.name]: e.target.value});
  };

  function handleSubmit(e){
    e.preventDefault()
    const url = 'http://localhost:1337/api/items';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formInput),
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(data => history.push('/home'))
  };

  return (
    <>
      <p>Create new item</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} />
      <textarea name="body" value={formInput.body} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  ) 
};

