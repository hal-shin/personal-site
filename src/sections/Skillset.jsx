import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import mq from "../utils/breakpoints";
import SectionHeader from "../components/SectionHeader";
import toolboxImage from "../assets/toolbox.png";

const Container = styled.div`
  ${mq({
    clipPath: [
      "polygon(50% 0%, 100% 5%, 100% 100%, 0 100%, 0 5%)",
      "polygon(50% 0%, 100% 8%, 100% 100%, 0 100%, 0 8%)",
      "polygon(50% 0%, 100% 10%, 100% 100%, 0 100%, 0 10%)",
      "polygon(50% 0%, 100% 15%, 100% 100%, 0 100%, 0 15%)",
    ],
  })};
  margin-top: -25vh;
  padding: calc(20vh + 200px) 0 200px 0;
  height: 100vh;
  background-color: #383333;
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
  flex-direction: column;
`;

const Columns = styled.div`
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
const ProgressBar = styled.div`
  height: 24px;
  width: 100%;
  background-color: #c4c4c4;
  //border: 2px solid white;
  margin-bottom: 12px;
  display: flex;
`;

const ProgressName = styled.div`
  height: 100%;
  width: 100px;
  background-color: orange;
`;

const ProgressContainer = styled.div`
  width: calc(100% - 100px);
  display: flex;
`;

const Progress = styled.div`
  background-color: #1478c9;
  height: 100%;
  width: ${(props) => props.confidence};
`;

const skills = [
  {
    text: "React",
    confidence: "90%",
  },
  {
    text: "JavaScript",
    confidence: "80%",
  },
  {
    text: "HTML",
    confidence: "80%",
  },
  {
    text: "CSS",
    confidence: "80%",
  },
];

export default function Skillset() {
  return (
    <Container>
      <Content>
        <Columns>
          <Column>
            <div>
              <Image src={toolboxImage} alt="" />
            </div>
          </Column>
          <Column>
            <Fade right>
              <SectionHeader color="white">Skillset</SectionHeader>
              <Text>
                I am a self-taught, full-stack web developer based in Surrey,
                BC. I love great application and I love the process of making
                them. My particular interests include great UI/UX, tooling
                applications, and writing clean code.
              </Text>
            </Fade>
          </Column>
        </Columns>
        <Fade up>
          {skills.map((skill) => (
            <ProgressBar key={skill.text}>
              <ProgressName>{skill.text}</ProgressName>
              <ProgressContainer>
                <Progress confidence={skill.confidence} />
              </ProgressContainer>
            </ProgressBar>
          ))}
        </Fade>
      </Content>
    </Container>
  );
}
