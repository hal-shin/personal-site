import React from "react";
import styled from "@emotion/styled";
import GitHub from "../assets/social-1_round-github.svg";
import LinkedIn from "../assets/social-1_round-linkedin.svg";
import Twitter from "../assets/social-1_round-twitter.svg";
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
  //border: 1px solid red;
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
          <a
            href="https://github.com/communitybicycle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="" className="svg-icon" />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://www.linkedin.com/in/halshin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="" className="svg-icon" />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://twitter.com/_halshin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="" className="svg-icon" />
          </a>
        </Icon>
      </Icons>
    </Container>
  );
}

export default Footer;
