import React, { useEffect, useContext } from 'react';

import { DataContext } from '../contexts/DataContext';

import { getAllItems } from '../requests/axiosRequests';

import { HeaderComponent } from '../components/header/HeaderComponent';
import { CreateNewComponent } from '../components/createNew/CreateNewComponent';
import { ItemCardComponent } from '../components/itemCard/ItemCardComponent';

import StyledMainContainer from '../components/layout/StyledMainContainer';

export const HomePage = () => {
  const {
    todoItems,
    setTodoItems,
    createNewItem
  } = useContext(DataContext);

  useEffect(() => {
    getAllItems()
      .then(res => setTodoItems(item => [...res.data]))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <HeaderComponent/>
      <StyledMainContainer>
        {createNewItem && <CreateNewComponent/>}
        {todoItems
        ?
        todoItems.map(item => {
            return <ItemCardComponent key={item._id} todoItem={item} />
        })
        :
        <p>No items found</p>
        }
      </StyledMainContainer>
    </>
  ) 
};

