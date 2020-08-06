import React from "react";
import styled from "@emotion/styled";
import GitHub from "../assets/social-1_round-github.svg";
import LinkedIn from "../assets/social-1_round-linkedin.svg";
import Twitter from "../assets/social-1_round-twitter.svg";
import mq from "../utils/breakpoints";

const Container = styled.div`
  background: transparent;
  //background-color: #787878;
  //background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23404040' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");

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
  justify-content: space-around;
`;

function Footer() {
  return (
    <Container>
      <Icons>
        <a
          href="https://github.com/communitybicycle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="" className="svg-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/halshin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="" className="svg-icon" />
        </a>
        <a
          href="https://twitter.com/_halshin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="" className="svg-icon" />
        </a>
      </Icons>
    </Container>
  );
}

export default Footer;
