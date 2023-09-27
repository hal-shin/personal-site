import React from "react";
import GitHub from "../assets/social-1_round-github.svg";
import LinkedIn from "../assets/social-1_round-linkedin.svg";
import Twitter from "../assets/social-1_round-twitter.svg";

export const GitHubIcon = () => (
  <a
    href="https://github.com/hal-shin"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={GitHub} alt="" className="svg-icon" />
  </a>
);

export const LinkedInIcon = () => (
  <a
    href="https://www.linkedin.com/in/halshin/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={LinkedIn} alt="" className="svg-icon" />
  </a>
);

export const TwitterIcon = () => (
  <a
    href="https://twitter.com/_halshin"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={Twitter} alt="" className="svg-icon" />
  </a>
);
