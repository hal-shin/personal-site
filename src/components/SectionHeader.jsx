import React from "react";
import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Header = styled.h2`
  color: ${(props) => props.color};
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin: 0 0 24px 0;
  ${mq({
    fontSize: ["2.25rem", "2.25rem", "2.75rem", "3.25rem", "3.5rem"],
  })}
`;

function SectionHeader({ color, center, children }) {
  return (
    <Header color={color || "#222"} center={center}>
      {children}
    </Header>
  );
}

export default SectionHeader;
