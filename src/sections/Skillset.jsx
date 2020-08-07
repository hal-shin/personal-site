import React from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import {
  Content,
  Image,
  Columns,
  ContainerBase,
  Column,
  SectionHeader,
} from "../components";
import toolboxImage from "../assets/toolbox.png";
import mq from "../utils/breakpoints";

const Container = styled(ContainerBase)`
  background-color: #383333;
`;

const Text = styled.p`
  text-align: left;
  color: white;
  margin-bottom: 16px;
`;

const Bars = styled.div`
  ${mq({
    marginTop: [48],
  })};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProgressBar = styled.div`
  ${mq({
    height: [24, 24, 28, 32, 36],
    width: ["100%", "100%", "80%"],
    paddingBottom: [6, 8, 10, 10, 12],
  })};
  display: flex;
`;

const ProgressName = styled.div`
  height: 100%;
  width: 100px;
  background-color: orange;
  border-radius: 20px 0 0 20px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & p {
    ${mq({
      fontWeight: [400, 400, 400, 500, 500],
      fontSize: ["1rem", "1rem", "1.125rem", "1.125rem", "1.125rem"],
    })}
  }
`;

const ProgressContainer = styled.div`
  width: calc(100% - 100px);
  display: flex;
  background-color: #c4c4c4;
  border-radius: 0 20px 20px 0;
`;

const Progress = styled.div`
  background-color: #1478c9;
  border-radius: 0 20px 20px 0;
  height: 100%;
  width: calc(${(props) => props.confidence} - 16px);
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > p {
    color: white;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  ${mq({
    justifyContent: [
      "center",
      "center",
      "flex-start",
      "flex-start",
      "flex-start",
    ],
  })};
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
  {
    text: "Redux",
    confidence: "70%",
  },
  {
    text: "Node.js",
    confidence: "70%",
  },
  {
    text: "Express.js",
    confidence: "70%",
  },
  {
    text: "MongoDB",
    confidence: "60%",
  },
];

export default function Skillset() {
  return (
    <Container>
      <Content>
        <Columns>
          <Column>
            <Fade left>
              <ImageDiv>
                <Image src={toolboxImage} alt="" />
              </ImageDiv>
            </Fade>
          </Column>
          <Column>
            <Fade right>
              <SectionHeader color="white">Skillset</SectionHeader>
              <Text>
                My main tech stack of choice is MERN, but I'm always on the
                lookout for new technologies and skills to take my applications
                further.
              </Text>
              <Text>
                On the side, I have other skills that make me a more rounded
                developer, such as design, project management, git/GitHub, and
                leadership.
              </Text>
            </Fade>
          </Column>
        </Columns>
        <Fade up>
          <Bars>
            {skills.map((skill) => (
              <ProgressBar key={skill.text}>
                <ProgressName>
                  <p>{skill.text}</p>
                </ProgressName>
                <ProgressContainer>
                  <Progress confidence={skill.confidence}>
                    <p>{skill.confidence}</p>
                  </Progress>
                </ProgressContainer>
              </ProgressBar>
            ))}
          </Bars>
        </Fade>
      </Content>
    </Container>
  );
}
