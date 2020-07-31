import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import mq from "../utils/breakpoints";
import SectionHeader from "../components/SectionHeader";
import aboutImage from "../assets/designer-fav-tool-wacom.png";

const Container = styled.div`
  ${mq({
    clipPath: [
      "polygon(50% 0%, 100% 5%, 100% 100%, 0 100%, 0 5%)",
      "polygon(50% 0%, 100% 8%, 100% 100%, 0 100%, 0 8%)",
      "polygon(50% 0%, 100% 10%, 100% 100%, 0 100%, 0 10%)",
      "polygon(50% 0%, 100% 15%, 100% 100%, 0 100%, 0 15%)",
    ],
  })}
  margin-top: 100vh;
  padding: calc(20vh + 200px) 0 200px 0;
  height: 100vh;
  background-color: rgb(20, 120, 201);
  //border: 1px solid red;
`;

const Content = styled.div`
  //margin: auto;
  scroll-snap-align: start;
  //width: 1280px;
  ${mq({
    padding: [
      "0 8px 0 8px",
      "0 5% 0 5%",
      "0 10% 0 10%",
      "0 12% 0 12%",
      "0 15% 0 15%",
    ],
  })}
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  //border: 1px solid brown;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.p`
  text-align: left;
  color: white;
`;


export default function About() {
  return (
    <Container>
      <Content>
        <Column>
          <Fade right>
            <SectionHeader color="white">About me</SectionHeader>
            <Text>
              I am a self-taught, full-stack web developer based in Surrey, BC.
              I love great application and I love the process of making them. My
              particular interests include great UI/UX, tooling applications,
              and writing clean code.
            </Text>
          </Fade>
        </Column>
        <Column>
          <div>
            <Image src={aboutImage} alt="" />
          </div>
        </Column>

      </Content>
    </Container>
  );
}
