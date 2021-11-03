import React, { useState, useEffect } from 'react';

import { getAllItems } from '../requests/axiosRequests';

import { HeaderComponent } from '../components/header/HeaderComponent';
import { ItemCardComponent } from '../components/itemCard/ItemCardComponent';

import StyledMainContainer from '../components/layout/StyledMainContainer';

export const HomePage = () => {
  const [todoItems, setTodoItems] = useState(null);
  const [errorMsg, setErrorMsg] = useState('No items found');

  useEffect(() => {
    getAllItems()
      .then(res => setTodoItems(item => [...res.data]))
      .catch(error => setErrorMsg(JSON.parse(error)));
  }, []);

  return (
    <>
      <HeaderComponent/>
      <StyledMainContainer>
        {todoItems
        ?
        todoItems.map(item => {
            return <ItemCardComponent key={item._id} todoItem={item} />
        })
        :
        <p>{errorMsg}</p>
        }
      </StyledMainContainer>
    </>
  ) 
};

