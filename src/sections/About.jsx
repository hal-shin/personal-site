import React from "react";
import styled from "@emotion/styled";
import mq from "../utils/breakpoints";
import Fade from "react-reveal/Fade";

import {
  Content,
  Column,
  Columns,
  ContainerBase,
  Image,
  SectionHeader,
} from "../components";
import aboutImage from "../assets/designer-fav-tool-wacom.png";

const Container = styled(ContainerBase)`
  margin-top: 100vh !important;
  background-color: rgb(20, 120, 201);
`;

const Text = styled.p`
  text-align: left;
  color: white;
`;

const ImageDiv = styled.div`
  display: flex;
  ${mq({
    justifyContent: ["center", "center", "flex-end", "flex-end", "flex-end"],
  })};
`;

export default function About() {
  return (
    <Container>
      <Content>
        <Columns>
          <Column reverse={true} order={0}>
            <Fade left>
              <SectionHeader color="white">About me</SectionHeader>
              <Text>
                I am a self-taught, full-stack web developer based in Surrey,
                BC. I love great application and I love the process of making
                them. My particular interests include great UI/UX, tooling
                applications, and writing clean code.
              </Text>
            </Fade>
          </Column>
          <Column reverse={true} order={1}>
            <Fade right><ImageDiv>
              <Image src={aboutImage} alt=""/>
            </ImageDiv></Fade>
          </Column>
        </Columns>
      </Content>
    </Container>
  );
}
