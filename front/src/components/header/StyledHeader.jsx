import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: black;
  padding: 1rem;

  p {
    color: white;
    margin-right: 1rem;
    cursor: pointer;
  };
`

const StyledTitle = styled.p`
  flex: 1;
  text-align: center;
`;

export {
  StyledHeader,
  StyledTitle,
};
