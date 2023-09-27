import styled from "@emotion/styled";
import React from "react";
import Fade from "react-reveal/Fade";
import aboutImage from "../assets/designer-fav-tool-wacom.png";

import {
  Button,
  Column,
  Columns,
  ContainerBase,
  Content,
  Image,
  SectionHeader,
} from "../components";
import Text from "../components/Text";
import mq from "../utils/breakpoints";

const Container = styled(ContainerBase)`
  margin-top: 100vh !important;
  background-color: rgb(20, 120, 201);
`;

const ImageDiv = styled.div`
  display: flex;
  ${mq({
    justifyContent: ["center", "center", "flex-end", "flex-end", "flex-end"],
  })};
`;

export default function About() {
  const handleClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Content>
        <Columns>
          <Column reverse={true} order={0}>
            <Fade left>
              <SectionHeader color="white">About me</SectionHeader>
              <Text>
                Greetings! I'm thrilled to welcome you to my corner of the
                digital universe. With over three years of professional software
                engineering experience, I've been on a journey to make the world
                a better place through software.
              </Text>
              <Text>
                Over the last few years, I've come to understand and appreciate
                a great breadth of software engineering: from intuitive UIs,
                scalable backend systems, to rapid development and deployment
                cycles, and team & project management. Despite the many
                different hats I've worn, my mandate has remained ultimately the
                same—to create software that is delightful to use and delightful
                to develop.
              </Text>
              <Text>
                As a self-taught developer, I welcome new challenges and I never
                stop learning. In fact, growth mindset is an approach that I
                apply not just to software engineering, but also on the tennis
                courts 🎾 and in my home studio playing guitar 🎸 and piano 🎹.
              </Text>
              <Text>
                I'm excited to connect and collaborate on projects that make a
                difference. Let's turn ideas into reality together!
              </Text>
              <Button onClick={handleClick} style={{ marginTop: 12 }}>
                Contact me
              </Button>
            </Fade>
          </Column>
          <Column reverse={true} order={1}>
            <Fade right>
              <ImageDiv>
                <Image src={aboutImage} alt="" />
              </ImageDiv>
            </Fade>
          </Column>
        </Columns>
      </Content>
    </Container>
  );
}
