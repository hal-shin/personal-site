import React from "react";
import styled from "@emotion/styled";
import SectionHeader from "../components/SectionHeader";

const Container = styled.div`
  margin-top: -15%;
  clip-path: polygon(50% 0%, 100% 15%, 100% 100%, 0 100%, 0 15%);
  padding-top: 20vh;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid yellow;
`;

const Content = styled.div`
  scroll-snap-align: start;
`;

export default function Portfolio() {
  return (
    <Container>
      <Content>
        <SectionHeader color="white">Portfolio</SectionHeader>
      </Content>
    </Container>
  );
}
