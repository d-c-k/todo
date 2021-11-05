import styled from 'styled-components';

const StyledItemCard = styled.div`
  position: relative;
  padding: 0.25rem;
  margin: 0.5rem;
  width: calc(20vw - 1.83rem);
  border: 1px solid black;
  box-shadow: 0.25rem 0.25rem black;
`

const StyledTitle = styled.p`
  display: inline;
  width: 80%;
`;

const StyledExpandButton = styled.button`
  float: right;
  background-color: white;
  border: 1px solid black;
  max-width: 20%;
  cursor: pointer;

  :hover, :active {
    color: white;
    background-color: black
  }
`;

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  margin: 0.3rem;

  :hover, :active {
    color: white;
    background-color: black
  }
`;

const StyledEditForm = styled.form`
  font-size: 1rem;
`;

const StyledEditInput = styled.input`
  width: 80%;
  color: blue;
`;

const StyledEditTextArea = styled.textarea`
  color: red;
`;

const StyledEditSubmit = styled.input`
  background-color: white;
  border: 1px solid black;
  cursor: pointer;

  :hover, :active {
    color: white;
    background-color: black
  }
`;

export {
  StyledItemCard,
  StyledTitle,
  StyledExpandButton,
  StyledButton,
  StyledEditForm,
  StyledEditInput,
  StyledEditTextArea,
  StyledEditSubmit
};
