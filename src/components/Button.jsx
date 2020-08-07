import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Button = styled.button`
  display: inline-block;
  background: rgb(101, 201, 255);
  border: 2px solid rgb(101, 201, 255);
  color: white;
  border-radius: 35px;
  cursor: pointer;
  ${mq({
    padding: ["6px 12px", "8px 12px", 14, 14, "16px 24px"],
    fontSize: ["1rem", "1rem", "1.125rem", "1.25rem", "1.375rem"],
  })};
  font-family: "Oxygen", sans-serif;

  transition: all ease-in-out 0.25s;

  &:hover {
    outline: none;
    background-color: white;
    color: rgb(101, 201, 255);
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
