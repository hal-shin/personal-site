import styled from "@emotion/styled";
import React from "react";

const StyledText = styled.p`
  text-align: left;
  color: white;
  margin-bottom: 16px;
`;

function Text({ children, ...rest }) {
  return <StyledText {...rest}>{children}</StyledText>;
}

export default Text;
