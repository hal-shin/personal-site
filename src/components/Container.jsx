import React from "react";
import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Root = styled.div`
  border: 1px solid blue;
`;

function Container({ children }) {
  return <Root>{children}</Root>;
}

export default Container;
