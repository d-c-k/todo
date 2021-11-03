import React from 'react';
import { Link } from 'react-router-dom';

import { 
  StyledHeader,
  StyledTitle,
} from './StyledHeader';  

export const HeaderComponent = ({title}) => {
  return (
    <StyledHeader>
      <Link to="/home">
        <p>Home</p>
      </Link>
    
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledHeader>
  ) 
};

