import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledItemCard from './StyledItemCard';

export const ItemCardComponent = ({todoItem}) => {
  const [expanded, setExpanded] = useState(false);  

  const handleOnClick = (e) => {
    expanded === false ? setExpanded(true) : setExpanded(false);
  };

  return (
    <StyledItemCard onClick={handleOnClick}>
      <p>TITLE={todoItem.title}</p>
      { expanded === true && 
        <>
          <p>BODY={todoItem.body}</p>
          <Link to={`/edit/${todoItem._id}`}>
            <p>EDIT</p>
          </Link>
        </>
      }
    </StyledItemCard>
  ) 
};

