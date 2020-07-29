import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "../components/Button";
import mq from "../utils/breakpoints";
import Zoom from "react-reveal/Zoom";

import HSAvatar from "../assets/hs-avatar.svg";
import AnimatedBackground from "../components/AnimatedBackground";

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
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  ${mq({
    height: ["60vw", 400, 500, 600, 700],
    width: ["60vw", 400, 500, 600, 700],
    border: [
      "4px solid rgb(101, 201, 255)",
      "4px solid rgb(101, 201, 255)",
      "6px solid rgb(101, 201, 255)",
      "8px solid rgb(101, 201, 255)",
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
  //width: 100%;
  ${mq({
    // width: [100, 150, 200, 250, 280],
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
  color: #222;
  ${mq({
    marginTop: [30, 30, 30, 40, 50],
    fontSize: ["2.25rem", "2.25rem", "2.75rem", "3.25rem", "3.5rem"],
  })}//color: rgb(101, 201, 255);
`;

const Subheader = styled.p`
  font-size: 2rem;
  ${mq({
    fontSize: ["1.25rem", "1.75rem", "1.75rem", "1.75rem", "2rem"],
    marginBottom: [20, 30, 40, 50, 60, 70],
  })};
  font-weight: normal;
`;

function Jumbotron() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > window.innerHeight
        ? setIsVisible(false)
        : setIsVisible(true);
    });
  }, []);

  return (
    <Container>
      <Background>
        <AnimatedBackground />
      </Background>

      <Content isVisible={isVisible}>
        <Zoom>
          <Avatar>
            <img src={HSAvatar} alt="" />
          </Avatar>
          <Header>Hal Shin</Header>
          <Subheader>full-stack web developer</Subheader>
          <div>
            <Button>View my work</Button>
          </div>
        </Zoom>
      </Content>
    </Container>
  );
}

export default Jumbotron;
