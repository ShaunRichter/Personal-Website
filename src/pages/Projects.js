import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import asteroidsVideo from "../assets/Asteroids_Recording.mp4";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My <span className="purple">Projects</span>
        </h1>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              videoPath={asteroidsVideo}
              title="Asteroids Arcade Game"
              description="Added features to Asteroids using OOP, dynamic memory, SFML, inheritance & polymorphism. Also helped 100+ students learn advanced C++ concepts as a TA."
              ghLink="https://github.com/ShaunRichter/Computers-In-Engineering/tree/main/hw7"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;