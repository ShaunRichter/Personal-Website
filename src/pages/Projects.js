import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css"; // Ensure this path is correct

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <span className="purple">Projects</span>
        </h1>
        <Row className="justify-content-center">
          <Col md={4} className="project-card">
            <ProjectCard
              title="Project One"
              description="A short description of project one with key highlights and technologies used."
              ghLink="https://github.com/yourusername/project-one"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Project Two"
              description="A short description of project two with relevant details."
              ghLink="https://github.com/yourusername/project-two"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Project Three"
              description="An overview of project three and what it achieves."
              ghLink="https://github.com/yourusername/project-three"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;