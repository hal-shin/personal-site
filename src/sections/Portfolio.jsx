import React, { createRef } from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

import {
  Project,
  ContainerBase,
  Content,
  SectionHeader,
  Center,
} from "../components";
import Text from "../components/Text";
import projects from "../data/projects";
import cassetteImage from "../assets/retro-cassette.png";
import mq from "../utils/breakpoints";

export const portfolioRef = createRef();

const Container = styled(ContainerBase)`
  background-color: rgb(249, 185, 120);
  position: relative;
`;

const PortfolioContent = styled(Content)`
  z-index: 200;
`;

const Image = styled.img`
  position: absolute;
  ${mq({
    top: [30, 50, 100, 150, 200],
    right: [20, 30, 50, 75, 125],
    width: [140, 200, 300, 400, 450],
  })};

  z-index: -1;
  transform: rotate(20deg);
`;

const Paper = styled.div`
  border-radius: 6px;
  background: white;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.07),
    0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  padding: 12px;
  display: grid;
  grid-auto-rows: 1fr;
  gap: 16px 16px;
  ${mq({
    gridTemplateColumns: [
      "auto",
      "auto",
      "auto auto",
      "auto auto",
      "auto auto",
      "auto auto auto",
    ],
  })};
`;

export default function Portfolio() {
  return (
    <Container>
      <Image src={cassetteImage} alt="" />
      <PortfolioContent customRef={portfolioRef}>
        <Fade down>
          <SectionHeader center color="white">
            Portfolio
          </SectionHeader>
          <Center>
            <Text>Projects below are sorted newest to oldest.</Text>
          </Center>
        </Fade>

        <Fade up>
          <Paper>
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </Paper>
        </Fade>
      </PortfolioContent>
    </Container>
  );
}
