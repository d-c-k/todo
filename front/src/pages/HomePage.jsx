import React, { useState, useEffect } from 'react';

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
    </>
  ) 
};

