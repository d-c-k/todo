import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({todoItem}) {
  return (
    <>
      <p>TITLE={todoItem.title}</p>
      <p>BODY={todoItem.body}</p>
      <Link to={`/edit/${todoItem._id}`}>
        <p>EDIT</p>
      </Link>
    </>
  ) 
};

