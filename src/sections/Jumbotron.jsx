import React from "react";
import styled from "@emotion/styled";
import { Button } from "../components/Button";

const Container = styled.div`
  height: 100vh;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  display: inline-block;
  font-size: 2.75rem;
`;

const Blue = styled.span`
  color: deepskyblue;
`;

function Jumbotron() {
  return (
    <Container>
      <Text>
        Hello, I'm <Blue>Hal Shin</Blue>.
      </Text>
      <Text>I am a full-stack web developer.</Text>
      <Button>View my work</Button>
    </Container>
  );
}

export default Jumbotron;
