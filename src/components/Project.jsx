import React from "react";
import styled from "@emotion/styled";
import { Center } from "./index";
import mq from "../utils/breakpoints";

const OuterContainer = styled.div`
  ${mq({
    width: [
      "calc(100% - 16px)",
      "calc(100% - 16px)",
      "calc(50% - 16px)",
      "calc(50% - 16px)",
      "calc(33% - 16px)",
    ],
  })};
  background: white;
  padding: 8px;
  overflow: hidden;
`;

const Container = styled.div`
  background: linear-gradient(
      0deg,
      rgba(45, 45, 70, 0.85),
      rgba(45, 45, 70, 0.85)
    ),
    url(${(props) => props.image});
  background-size: cover;
  padding: 8px;
  position: relative;
  min-height: 300px; //remove later
  transition: all 0s ease-in;
  z-index: 5;
  &::before {
    background: linear-gradient(
        0deg,
        rgba(45, 45, 70, 0.35),
        rgba(45, 45, 70, 0.35)
      ),
      url(${(props) => props.image});
    background-size: cover;
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.25s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transition: all 0.25s ease-in;

    & h3 {
      transition: all 0.25s ease-in;
      top: 0;
    }
    & > div {
      transition: all 0.25s ease-in;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Header = styled.h3`
  font-size: 1.5rem;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  height: 100%;
  text-shadow: 0 0 10px #888;
  transition: transform 0s ease-in;
`;

const Button = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  color: white;
  border: 2px solid white;
  padding: 12px;
  cursor: pointer;
  transition: all 0s ease-in;
  box-shadow: 0 0 10px #888;
  &:hover {
    border: 2px solid yellow;
  }
`;

const GoToProject = styled(Button)`
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

const SourceButton = styled(Button)`
  position: absolute;
  bottom: 12px;
  right: 12px;
`;

function Project({ project }) {
  const { name, url, github, image } = project;

  const handleGoToProject = () => {
    window.open(url, "_blank");
  };

  const handleSourceCode = () => {
    window.open(github, "_blank");
  };

  return (
    <OuterContainer>
      <Container image={image}>
        <Center>
          <Header>{name}</Header>
        </Center>
        <GoToProject onClick={handleGoToProject}>Go to Project</GoToProject>
        <SourceButton onClick={handleSourceCode}>Source Code</SourceButton>
      </Container>
    </OuterContainer>
  );
}

export default Project;
