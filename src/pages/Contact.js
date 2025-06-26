import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="icon-row">
        <a
          href="https://www.linkedin.com/in/shaun-richter-a90b412b6/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="contact-icon linkedin" />
        </a>

        <a
          href="https://github.com/ShaunRichter"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="contact-icon github" />
        </a>
      </div>
      <div className="contact-details">
        <p>
          <FaEnvelope className="detail-icon" />{" "}
          <a href="mailto:shaunrichter547@gmail.com">
            shaunrichter547@gmail.com
          </a>
        </p>
        <p>
          <FaEnvelope className="detail-icon" />{" "}
          <a href="mailto:shaun-richter@uiowa.edu">
            shaun-richter@uiowa.edu
          </a>
        </p>
        <p>
          <FaPhone className="detail-icon" />{" "}
          <a href="tel:9513068200">(951) 306-8200</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
