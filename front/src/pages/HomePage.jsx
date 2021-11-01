import React, { useState, useEffect } from 'react';

import { getAllItems } from '../requests/axiosRequests';

import Item from '../components/Item';

export const HomePage = () => {
  const [todoItems, setTodoItems] = useState(null);
  const [errorMsg, setErrorMsg] = useState('No items found');

  useEffect(() => {
    getAllItems()
      .then(res => setTodoItems(item => [...res.data]))
      .catch(error => setErrorMsg(JSON.parse(error)));
  }, []);

  console.log(todoItems);
  return (
    <>
      <p>Home</p>
      {todoItems
      ?
      todoItems.map(item => {
          return <Item key={item._id} todoItem={item} />
      })
      :
      <p>{errorMsg}</p>
      }
    </>
  ) 
};

