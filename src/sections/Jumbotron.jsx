import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";

import { AnimatedBackground, Button } from "../components";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/SocialIcons";
import mq from "../utils/breakpoints";
import HSAvatar from "../assets/hs-avatar.svg";
import { portfolioRef } from "./Portfolio";

const Container = styled.section`
  height: 100vh;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: -100;
`;

const Content = styled.div`
  background-color: white;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mq({
    height: [290, 360, 500, 600, "min(70vw, 70vh)"],
    width: [290, 360, 500, 600, "min(70vw, 70vh)"],
    border: [
      "6px solid rgb(101, 201, 255)",
      "7px solid rgb(101, 201, 255)",
      "8px solid rgb(101, 201, 255)",
      "9px solid rgb(101, 201, 255)",
      "10px solid rgb(101, 201, 255)",
    ],
    padding: [25, 40, 50, 50, 50],
  })};
  border-radius: 50%;
  z-index: ${(props) => (props.isHidden ? "-200" : "1")};
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.isHidden ? "1" : "-20")};
  background: white;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & * {
    margin-bottom: 20px;
  }
  ${mq({
    paddingBottom: [0, 0, 50, 100, 100],
  })};
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  ${mq({
    position: ["absolute", "static"],
    "& img": {
      width: [150, 150, 200, 225, 250],
    },
  })};
  top: -100px;
  left: 0;
  right: 0;
`;

const Header = styled.h2`
  margin: 0;
  font-weight: 900;
  color: #222;
  text-align: center;
  ${mq({
    marginTop: [90, -20, 0, 0, 0],
    fontSize: ["2.25rem", "2.25rem", "2.75rem", "3.25rem", "3.5rem"],
  })}
`;

const Subheader = styled.p`
  font-size: 2rem;
  color: #222;
  ${mq({
    fontSize: ["1.55rem", "1.75rem", "1.75rem", "1.75rem", "2rem"],
    marginBottom: [25, 20, 20, 30, 30],
  })};
  font-weight: normal;
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mq({
    height: ["40px", "46px", "56px", "70px", "100px"],
    marginBottom: ["0", "0", "20px"],
    padding: ["0 10%", "0 10%", "0"],
  })};
  //border: 1px solid red;
`;

const Icon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  & > * {
    position: absolute;
    margin: 0;
  }
  & > a > img {
    ${mq({
      height: ["28px", "34px", "40px", "46px", "50px"],
      width: ["28px", "34px", "40px", "46px", "50px"],
    })};
  }
`;

function Jumbotron() {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Container>
      <Background isHidden={isHidden}>
        <AnimatedBackground />
      </Background>
      <Zoom>
        <Content isHidden={isHidden}>
          <CenteredContent>
            <Avatar>
              <Zoom>
                <img src={HSAvatar} alt="" />
              </Zoom>
            </Avatar>
            <div>
              <Header>Hal Shin</Header>
              <Subheader>software engineer</Subheader>
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
            </div>
            <div>
              <Button onClick={handleClick}>View my work</Button>
            </div>
          </CenteredContent>
        </Content>
      </Zoom>
    </Container>
  );
}

export default Jumbotron;
