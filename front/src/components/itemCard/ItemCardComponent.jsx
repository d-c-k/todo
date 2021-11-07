import React, { useState, useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';

import { getAllItems, editItem, deleteItem } from '../../requests/axiosRequests';

import {
  StyledItemCard,
  StyledTitle,
  StyledExpandButton,
  StyledButton,
  StyledEditForm,
  StyledEditInput,
  StyledEditTextArea,
  StyledEditSubmit,
  StyledErrorMessage
} from './StyledItemCard';

export const ItemCardComponent = ({todoItem}) => {
  const [expanded, setExpanded] = useState(false);  
  const [editable, setEditable] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { setTodoItems } = useContext(DataContext);
  const [buttonSymbol, setButtonSymbol] = useState("MORE");
  const [item, setItem] = useState({title:todoItem.title, body:todoItem.body});

  const handleOnClick = (e) => {
    if(expanded === false){
      setExpanded(true);
      setButtonSymbol("LESS");
    } else {
      setExpanded(false);
      setButtonSymbol("MORE");
      setItem({title:todoItem.title, body:todoItem.body});
    };
    editable === true && setEditable(false);
  };

  const handleEdit = (e) => {
    setEditable(true);
  };

  const handleOnChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value});
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editItem(todoItem._id, item)
      .then(() => setEditable(false))
      .catch((error) => setErrorMsg(error.response.data.errorMessage));
  };

  const handleDelete = (e) => {
    deleteItem(todoItem._id)
      .then(() => {
        getAllItems()
          .then((res) => setTodoItems(res.data));
      })
      .catch((error) => console.error(error)); 
  };

  if(editable === false){
    return (
      <StyledItemCard>
        <StyledTitle>{item.title}</StyledTitle>
        <StyledExpandButton onClick={handleOnClick}>{buttonSymbol}</StyledExpandButton>
        { expanded === true && 
          <>
            <p>{item.body}</p>
            <p>Created: {todoItem.createdAt}</p>
            {todoItem.updatedAt !== todoItem.createdAt && <p>Updated: {todoItem.updatedAt}</p>}
            <StyledButton onClick={handleEdit}>EDIT</StyledButton>
            <StyledButton onClick={handleDelete}>DELETE</StyledButton>
          </>
        }
      </StyledItemCard>
    ) 
  } else {
    return (
      <StyledItemCard>
        {errorMsg && <StyledErrorMessage>{errorMsg}</StyledErrorMessage>}
        <StyledEditForm onSubmit={handleEditSubmit}>
          <StyledEditInput type="text" name="title" value={item.title} onChange={handleOnChange}/>
          <StyledExpandButton onClick={handleOnClick}>{buttonSymbol}</StyledExpandButton>
          <StyledEditTextArea name="body" value={item.body} onChange={handleOnChange}/>
          <StyledEditSubmit type="submit" value="SUBMIT"/>
        </StyledEditForm>
      </StyledItemCard>
    )
  };
};
