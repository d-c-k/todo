import React, { useState, useEffect } from 'react';

import Item from '../components/Item';

export default function HomePage() {
  const [todoItems, setTodoItems] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/items', {
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(data => setTodoItems(item => [...data]))
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

