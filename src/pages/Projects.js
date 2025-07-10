import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import asteroidsVideo from "../assets/Asteroids_Recording.mp4";
import drivesenseVideo from "../assets/drivesenseClipped.mp4";
import shardsVideo from "../assets/seltClipped.mp4"
import commNetsImg from "../assets/commNets.png";
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
              title="☄️ Asteroids Arcade Game"
              description="Added features to Asteroids using OOP, dynamic memory, SFML, inheritance & polymorphism. Also helped 100+ students learn advanced C++ concepts as a TA."
              ghLink="https://github.com/ShaunRichter/Computers-In-Engineering/tree/main/hw7"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              videoPath={drivesenseVideo}
              title="🚗 DriveSense"
              description="We utilized computer vision to monitor and record driver distractedness. We used a Raspberry Pi and Teachable Machine for our machine learning model. We also constructed a React dashboard application for data visualization."
              ghLink="https://github.com/ShaunRichter/ECE-5550-Internet-of-Things"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              videoPath={shardsVideo}
              title="💎Shards of the Grid"
              description="Our team developed a multiplayer game with Generative AI components in the form of a SaaS application using the Rails web framework."
              ghLink="https://github.com/olduiowahjmjohnsonSELT2024/projectdirectory-selt_2024_team_003"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={commNetsImg}
              title="📡 Comm Nets Protocol"
              description="Designed a secure and efficient messaging protocol over UDP for fast client-server communication. Features a lightweight handshake system, password protection, and custom packet headers to store and verify messages reliably."
              ghLink="https://github.com/ShaunRichter/udp-messaging-protocol"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;