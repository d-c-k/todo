import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../../contexts/DataContext';

import { 
  StyledHeader,
  StyledTitle,
} from './StyledHeader';  

export const HeaderComponent = ({title}) => {
  const { setCreateNewItem } = useContext(DataContext);

  const handleOnClick = (e) => {
    setCreateNewItem(true);
  };

  return (
    <StyledHeader>
      <Link to="/home">
        <p>Home</p>
      </Link>
      <p onClick={handleOnClick}>New</p>
    
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledHeader>
  ) 
};

