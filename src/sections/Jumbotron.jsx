import React from "react";
import styled from "@emotion/styled";

import { AnimatedBackground, Button } from "../components";
import mq from "../utils/breakpoints";
import Zoom from "react-reveal/Zoom";
import HSAvatar from "../assets/hs-avatar.svg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: -100;
`;

const Content = styled.div`
  background-color: white;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq({
    height: ["min(60vw, 60vh)", "min(60vw, 60vh)", 500, 600, "min(70vw, 70vh)"],
    width: ["min(60vw, 60vh)", "min(60vw, 60vh)", 500, 600, "min(70vw, 70vh)"],
    border: [
      "6px solid rgb(101, 201, 255)",
      "7px solid rgb(101, 201, 255)",
      "8px solid rgb(101, 201, 255)",
      "9px solid rgb(101, 201, 255)",
      "10px solid rgb(101, 201, 255)",
    ],
    justifyContent: [
      "center",
      "flex-start",
      "flex-start",
      "flex-start",
      "flex-start",
    ],
  })};
  padding: 50px;
  border-radius: 50%;
  z-index: 1;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  ${mq({
    position: ["absolute", "static"],
    "& img": {
      width: [150, 150, 200, 225, 250],
    },
  })};
  top: -100px;
  left: 0;
  right: 0;
`;

const Header = styled.h2`
  margin: 0;
  font-weight: 900;
  color: #333;
  ${mq({
    marginTop: [30, 30, 30, 40, 50],
    fontSize: ["2.25rem", "2.25rem", "2.75rem", "3.25rem", "3.5rem"],
  })}//color: rgb(101, 201, 255);
`;

const Subheader = styled.p`
  font-size: 2rem;
  color: #333;
  ${mq({
    fontSize: ["1.25rem", "1.75rem", "1.75rem", "1.75rem", "2rem"],
    marginBottom: [20, 30, 40, 50, 60, 70],
  })};
  font-weight: normal;
  text-align: center;
`;

function Jumbotron() {
  return (
    <Container>
      <Background>
        <AnimatedBackground />
      </Background>

      <Zoom>
        <Content>
          <Avatar>
            <Zoom>
              <img src={HSAvatar} alt="" />
            </Zoom>
          </Avatar>
          <Header>Hal Shin</Header>
          <Subheader>full-stack web developer</Subheader>
          <div>
            <Button>View my work</Button>
          </div>
        </Content>
      </Zoom>
    </Container>
  );
}

export default Jumbotron;
