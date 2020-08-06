import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Center,
  ContainerBase,
  Content,
  SectionHeader,
} from "../components";
import Fade from "react-reveal/Fade";
import mq from "../utils/breakpoints";

const Container = styled(ContainerBase)`
  background-color: orange;
  ${mq({
    padding: [
      "calc(50px + 50px) 0 115px 0",
      "calc(75px + 70px) 0 175px 0",
      "calc(125px + 100px) 0 200px 0",
      "calc(175px + 150px) 0 250px 0",
      "calc(225px + 200px) 0 300px 0",
    ],
  })}
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ErrorText = styled.p`
  margin-bottom: 12px;
`;

const ContactButton = styled(Button)`
  &:hover {
    //background: transparent;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const TextareaDiv = styled.div`
  background: white;
  border-radius: 6px;
  & > textarea {
    width: calc(100% - 24px);
    resize: none;
  }
`;

const TextareaLength = styled.div`
  padding: 8px;
  text-align: right;
  color: #222;
`;

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((state) => ({
      ...state,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { email, name, message } = formData;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      setError("I would love an email address so I can get back to you!");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("That's not a valid email address, unfortunately.");
      return false;
    } else if (!name) {
      setError("I'd love to get to know you! I'd need a name first though...");
      return false;
    } else if (!message) {
      setError(
        "I'm sure you have something to tell me! Please fill in the message."
      );
      return false;
    } else if (message.length < 10) {
      setError("I'd surely appreciate a slightly longer message!");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isOkay = validateForm();
    if (!isOkay) return;

    window.emailjs
      .send("gmail", "template_ZJytiDpT", {
        to_name: "Hal",
        from_name: formData.name,
        message_html: formData.message,
        reply_to: formData.email,
      })
      .then((res) => {
        setIsEmailSent(true);
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("Oh well, it didn't go through."));
  };

  return (
    <Container>
      <Content center>
        <Fade down>
          <SectionHeader color="white" center>
            Contact Me
          </SectionHeader>
        </Fade>
        {isEmailSent ? (
          <p>Your message has been sent!</p>
        ) : (
          <Form>
            <Fade up>
              <div>
                <InputField>
                  <label htmlFor="email">Email (Required)</label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="E.g. johndoe@gmail.com"
                    maxLength="320"
                  />
                </InputField>
                <InputField>
                  <label htmlFor="name">Name (Required)</label>
                  <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    placeholder="E.g. John Doe"
                    maxLength="100"
                  />
                </InputField>
                <InputField>
                  <label htmlFor="message">Message (Required)</label>
                  <TextareaDiv>
                    <textarea
                      id="message"
                      onChange={handleChange}
                      placeholder="Enter your message here."
                      maxLength="500"
                    />
                    <TextareaLength>
                      {formData.message.length}/500
                    </TextareaLength>
                  </TextareaDiv>
                </InputField>
                {error && (
                  <Center>
                    <ErrorText>{error}</ErrorText>
                  </Center>
                )}
                <Center>
                  <ContactButton onClick={handleSubmit}>Submit</ContactButton>
                </Center>
              </div>
            </Fade>
          </Form>
        )}
      </Content>
    </Container>
  );
}

export default Contact;
