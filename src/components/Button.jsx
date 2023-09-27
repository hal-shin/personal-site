import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Button = styled.button`
  display: inline-block;
  background: rgb(101, 201, 255);
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  ${mq({
    padding: ["6px 12px", "8px 12px", 14, 14, "16px 24px"],
    fontSize: ["1rem", "1.125rem", "1.125rem", "1.25rem", "1.375rem"],
  })};
  font-family: "Oxygen", sans-serif;

  transition: all 0.15s ease-in;

  &:hover {
    // outline: 10px solid rgba(230, 230, 230, 1);
    transform: translateY(-4px);
    box-shadow: 0 6px 0 -1px rgba(0, 0, 0, 0.42);
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
