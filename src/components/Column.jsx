import React from "react";
import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const ColumnStyles = styled.div`
  ${(props) =>
    mq({
      width: ["100%", "100%", "50%", "50%", "50%"],
      order: props.reverse
        ? [
            props.order === 1 ? 0 : 1,
            props.order === 1 ? 0 : 1,
            props.order,
            props.order,
            props.order,
          ]
        : "",
    })};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function Column({ reverse, order, children }) {
  return (
    <ColumnStyles reverse={Boolean(reverse)} order={order}>
      {children}
    </ColumnStyles>
  );
}

export default Column;
