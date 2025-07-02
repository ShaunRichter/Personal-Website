import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import gmailIcon from "../assets/gmail.svg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container className="contact-container text-center">
        <h1 className="contact-heading">Contact Me</h1>

        <Row className="justify-content-center contact-icon-row">
          <Col xs="auto">
            <a
              href="https://www.linkedin.com/in/shaun-richter-a90b412b6/"
              target="_blank"
              rel="noreferrer"
              className="contact-icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://github.com/ShaunRichter"
              target="_blank"
              rel="noreferrer"
              className="contact-icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="mailto:shaunrichter547@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="gmail-link with-tooltip"
              aria-label="Gmail"
            >
              <img src={gmailIcon} alt="Gmail" className="gmail-icon" />
              <span className="tooltip-text">shaunrichter547@gmail.com</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;