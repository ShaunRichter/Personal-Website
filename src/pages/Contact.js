import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import gmailIcon from "../assets/gmail.svg";
import resumeIcon from "../assets/resume.svg";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container className="contact-container">
        <Row className="align-items-start">
          <Col md={6} className="contact-left">
            <h1 className="contact-heading">Contact Me</h1>
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/shaun-richter-a90b412b6/"
                target="_blank"
                rel="noreferrer"
                className="contact-icon linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ShaunRichter"
                target="_blank"
                rel="noreferrer"
                className="contact-icon github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
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
            </div>
          </Col>

          <Col md={6} className="resume-right">
            <h1 className="contact-heading">Resume</h1>
            <Link to="/resume" className="resume-link" aria-label="Resume">
              <img src={resumeIcon} alt="Resume Icon" className="resume-svg" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;