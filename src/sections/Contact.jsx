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
  background-color: rgb(168, 218, 181);
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
  ${mq({
    width: ["100%", "100%", "80%", "80%", "60%"],
  })};
`;

const Label = styled.label`
  font-family: "Oxygen", sans-serif;
  font-weight: 400;
  ${mq({
    fontSize: ["1rem", "1rem", "1.125rem", "1.25rem", "1.375rem"],
  })};
  padding-bottom: 8px;
  color: #222;
`;

const ErrorText = styled.p`
  margin-bottom: 12px;
`;

const ContactButton = styled(Button)`
  border-radius: 6px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: none;
  border-radius: 6px;
  min-height: 48px;
  font-family: "Oxygen", sans-serif;
  font-weight: 400;
  padding: 0 12px;
  color: #222;
  &:focus {
    outline: none;
  }
  ${mq({
    fontSize: ["1rem", "1rem", "1.125rem", "1.25rem", "1.375rem"],
  })};
`;

const Textarea = styled.textarea`
  border: none;
  border-radius: 6px;
  font-family: "Oxygen", sans-serif;
  font-weight: 400;
  font-size: 1.375rem;
  min-width: 300px;

  max-width: 1200px;
  padding: 12px 12px 36px 12px;
  color: #222;
  &:focus {
    outline: none;
  }
  ${mq({
    minHeight: [100, 100, 150, 150, 150],
    fontSize: ["1rem", "1rem", "1.125rem", "1.25rem", "1.375rem"],
  })};
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
          <SectionHeader center>Contact Me</SectionHeader>
        </Fade>
        {isEmailSent ? (
          <p>Your message has been sent!</p>
        ) : (
          <Form>
            <Fade up>
              <div>
                <InputField>
                  <Label htmlFor="email">Email (Required)</Label>
                  <Input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="E.g. johndoe@gmail.com"
                    maxLength="320"
                  />
                </InputField>
                <InputField>
                  <Label htmlFor="name">Name (Required)</Label>
                  <Input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    placeholder="E.g. John Doe"
                    maxLength="100"
                  />
                </InputField>
                <InputField>
                  <Label htmlFor="message">Message (Required)</Label>
                  <TextareaDiv>
                    <Textarea
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
