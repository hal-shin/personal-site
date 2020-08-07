import React from "react";
import styled from "@emotion/styled";
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
  display: flex;
  flex-direction: column;

  background: linear-gradient(
      0deg,
      rgba(45, 45, 70, 0.05),
      rgba(45, 45, 70, 0.05)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  padding: 16px;
  min-height: 300px; //remove later
  height: auto;
  transition: all 0s ease-in;
  z-index: 5;
  position: relative;
  &::before {
    background: linear-gradient(
        0deg,
        rgba(45, 45, 70, 0.9),
        rgba(45, 45, 70, 0.9)
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
    transition: opacity 0.25s linear;
    opacity: 1;
  }

  &:hover {
    transition: all 0.25s ease-in;

    & h3 {
      transition: all 0.25s ease-in;
      visibility: visible;
      opacity: 1;
    }
    & > div {
      transition: all 0.25s ease-in;
      visibility: visible;
      opacity: 1;
    }

    & p {
      transition: all 0.25s ease-in;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Header = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.5rem;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  text-align: center;
  color: white;
  height: 100%;
  visibility: hidden;
  opacity: 0;
`;

const Description = styled.p`
  flex-grow: 1;
  ${mq({
    fontSize: ["1rem", "1rem", "1.125rem", "1.125rem", "1.25rem"],
  })};
  visibility: hidden;
  color: white;
  opacity: 0;
`;

const Buttons = styled.div`
  opacity: 0;
  visibility: hidden;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq({
    fontSize: ["1rem", "1rem", "1.125rem", "1.125rem", "1.25rem"],
    padding: [8, 8, 10, 10, 12],
  })};
  font-family: "Oxygen", sans-serif;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.25s ease-in;
  &:hover {
    transition: all 0.25s ease-in;
    background-color: rgb(101, 201, 255);
    border: 2px solid rgb(101, 201, 255);
  }
`;

function Project({ project }) {
  const { name, url, github, image, description } = project;

  const handleGoToProject = () => {
    window.open(url, "_blank");
  };

  const handleSourceCode = () => {
    window.open(github, "_blank");
  };

  return (
    <OuterContainer>
      <Container image={image}>
        <Header>{name}</Header>
        <Description>{description}</Description>
        <Buttons>
          <Button onClick={handleGoToProject}>Go to Project</Button>
          <Button onClick={handleSourceCode}>Source Code</Button>
        </Buttons>
      </Container>
    </OuterContainer>
  );
}

export default Project;
