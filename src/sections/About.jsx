import styled from "@emotion/styled";
import React from "react";
import Fade from "react-reveal/Fade";
import aboutImage from "../assets/designer-fav-tool-wacom.png";

import {
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
  return (
    <Container>
      <Content>
        <Columns>
          <Column reverse={true} order={0}>
            <Fade left>
              <SectionHeader color="white">About me</SectionHeader>
              <Text>
                I am a self-taught, full-stack developer based in Surrey, BC. I
                love making great applications that serve meaningful uses, look
                fantastic, and are easy to use.
              </Text>
              <Text>
                While I'm a proponent of good UI/UX everywhere, I have
                experience in the analytics department, making consumable charts
                and visualizations to make sense of data.
              </Text>
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
