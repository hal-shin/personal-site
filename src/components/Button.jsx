import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

export const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: 2px solid rgb(101, 201, 255);
  cursor: pointer;
  ${mq({
    padding: [8, 12, 14, 14, 16],
    fontSize: ["0.875rem", "1rem", "1.125rem", "1.25rem", "1.375rem"],
  })}

  transition: all ease-in-out 0.2s;

  &:hover {
    border: 2px solid black;
  }

  &:focus {
    outline: none;
  }
`;
