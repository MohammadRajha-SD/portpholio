import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Wrapper, Title, Desc } from "../index.jsx";
import swal from "sweetalert";
import {
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
} from "./StyledContact.js";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cnznjsg",
        "template_5gso563",
        form.current,
        "GtxWI4jW4smvXWodf"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            swal("Success", "Email sent successfully! 🚀", "success");
            form.current.reset();
          }
        },
        (error) => {
          swal("Error", "Failed to send email. Please try again.", "error");
        }
      );
  };

  return (
    <Container id="contact" style={{ scrollMarginTop: 90 }}>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Name" name="name" required />
          <ContactInput
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
