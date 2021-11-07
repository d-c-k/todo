import React, { useState, useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';

import { createItem, getAllItems } from '../../requests/axiosRequests';

import {
  StyledItemCard,
  StyledExpandButton,
  StyledEditForm,
  StyledEditInput,
  StyledEditTextArea,
  StyledEditSubmit,
  StyledErrorMessage
} from '../itemCard/StyledItemCard';

export const CreateNewComponent = () => {
  const [newItem, setNewItem] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { setTodoItems, setCreateNewItem } = useContext(DataContext);

  const handleOnChange = (e) => {
    setNewItem({...newItem, [e.target.name]: e.target.value});
  };

  const handleOnCancel = (e) => {
    setCreateNewItem(false);
    setNewItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(newItem)
      .then((res) => { 
        getAllItems()
          .then((res) => setTodoItems(res.data));
      })
      .then(() => setCreateNewItem(false))
      .catch((error) => setErrorMsg(error.response.data.errorMessage));
  };

  return (
    <StyledItemCard>
      {errorMsg && <StyledErrorMessage>{errorMsg}</StyledErrorMessage>}
      <StyledEditForm onSubmit={handleSubmit}>
        <StyledEditInput type="text" name="title" placeholder="Title" onChange={handleOnChange}/>
        <StyledExpandButton onClick={handleOnCancel}>CANCEL</StyledExpandButton>
        <StyledEditTextArea name="body" placeholder="body" onChange={handleOnChange}/>
        <StyledEditSubmit type="submit" value="SAVE"/>
      </StyledEditForm>
    </StyledItemCard>
  ) 
};

