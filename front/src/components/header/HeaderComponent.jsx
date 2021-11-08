import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../../contexts/DataContext';

import { 
  StyledHeader,
  StyledTitle,
} from './StyledHeader';  

export const HeaderComponent = ({title}) => {
  const { createNewItem, setCreateNewItem } = useContext(DataContext);

  const handleOnClick = (e) => {
    createNewItem ? setCreateNewItem(false) : setCreateNewItem(true);
  };

  return (
    <StyledHeader>
      <Link to="/home">
        <p>Home</p>
      </Link>
      {!title && <p onClick={handleOnClick}>New</p>}
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledHeader>
  ) 
};

