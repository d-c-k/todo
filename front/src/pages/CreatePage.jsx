import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createItem } from '../requests/axiosRequests';

export const CreatePage = () => {
  const [formInput, setFormInput] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setFormInput({...formInput, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(formInput);
    history.push('/home');
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

