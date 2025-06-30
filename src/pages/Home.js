import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/software-engineer.svg";
import Type from "../components/Type";
import "../styles/Home.css";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* Particle can be added later if needed */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="greeting">
                Hey there{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋
                </span>
              </h1>

              <h1 className="name-heading">
                I'M <strong className="main-name">SHAUN RICHTER</strong>
              </h1>

              <div className="typewriter">
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-image">
              <img
                src={homeLogo}
                alt="Software Engineer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;