import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import homeLogo from "../assets/software-engineer.svg";
import Type from "../components/Type";
import "../styles/Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-left">
              <h1 className="greeting">
                Hey there{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋
                </span>
              </h1>

              <h1 className="name-heading">
                I'M <strong className="main-name">SHAUN RICHTER</strong>
                <span className="desktop-socials">
                  <a
                    href="https://www.linkedin.com/in/shaun-richter-a90b412b6/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                  >
                    <FaLinkedin className="social-icon linkedin" />
                  </a>
                  <a
                    href="https://github.com/ShaunRichter"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-link"
                  >
                    <FaGithub className="social-icon github" />
                  </a>
                </span>
              </h1>

              {/* Mobile-only social icons below name heading */}
              <div className="mobile-socials">
                <a
                  href="https://www.linkedin.com/in/shaun-richter-a90b412b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <FaLinkedin className="social-icon linkedin" />
                </a>
                <a
                  href="https://github.com/ShaunRichter"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <FaGithub className="social-icon github" />
                </a>
              </div>

              <Type />
            </Col>

            <Col md={5} className="home-image">
              <img
                src={homeLogo}
                alt="Software Engineer"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
