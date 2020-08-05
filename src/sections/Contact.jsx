import React from "react";
import styled from "@emotion/styled";
import { ContainerBase, Content, SectionHeader } from "../components";

const Container = styled(ContainerBase)`
  background-color: orange;
`;

function Contact() {
  return (
    <Container>
      <Content>
        <SectionHeader color="white">Contact Me</SectionHeader>
      </Content>
    </Container>
  );
}

export default Contact;
