import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import { Container, Wrapper, Title, Desc } from "../index.jsx";
import {
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./StyledContact.js";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1en103u",
        "template_5gso563",
        form.current,
        "GtxWI4jW4smvXWodf"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput type="hidden" value="Mohammad" name="to_name" />
          <ContactInput placeholder="Your Email" name="user_email" />
          <ContactInput placeholder="Your Name" name="user_name" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully! 🚀"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
