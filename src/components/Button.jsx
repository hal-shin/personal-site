import styled from "@emotion/styled";

export const Button = styled.button`
  background: transparent;
  border: 2px solid grey;
  cursor: pointer;
  padding: 16px;

  font-size: 1.375rem;

  transition: all ease-in-out 0.2s;

  &:hover {
    border: 2px solid black;
  }

  &:focus {
    outline: none;
  }
`;
