import styled from "@emotion/styled";
import React from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/SocialIcons";
import mq from "../utils/breakpoints";

const Container = styled.div`
  background: transparent;
  ${mq({
    height: [100, 100, 150, 150, 200],
  })};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
`;

const Icons = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

function Footer() {
  return (
    <Container>
      <Icons>
        <Icon>
          <GitHubIcon />
        </Icon>
        <Icon>
          <LinkedInIcon />
        </Icon>
        <Icon>
          <TwitterIcon />
        </Icon>
      </Icons>
    </Container>
  );
}

export default Footer;
