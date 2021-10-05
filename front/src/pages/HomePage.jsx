import React, { useState, useEffect } from 'react';

import Item from '../components/Item';

export default function HomePage() {
  const [todoItems, setTodoItems] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:1337/api/items';
    fetch(url, {
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(data => setTodoItems(item => [...data]))
    .catch(error => console.log(error))
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
      <p>No todo items</p>
      }
    </>
  ) 
};

