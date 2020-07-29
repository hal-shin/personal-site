import React from "react";
import styled from "@emotion/styled";
import mq from "../utils/breakpoints";

const Header = styled.h2`
  color: ${(props) => props.color};
  text-align: left;
  margin: 0 0 24px 0;
  ${mq({
    fontSize: ["2.25rem", "2.25rem", "2.75rem", "3.25rem", "3.5rem"],
  })}
`;

function SectionHeader({ color, children }) {
  return <Header color={color || "black"}>{children}</Header>;
}

export default SectionHeader;
