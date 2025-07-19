import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imgPath, videoPath, title, description, ghLink }) => {
  return (
    <Card className="project-card-view">
      {videoPath ? (
        <video
          className="card-video"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        imgPath && (
          <Card.Img
            variant="top"
            src={imgPath}
            alt={title}
            className="card-image"
          />
        )
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-title">{title}</Card.Title>
        <Card.Text className="project-text flex-grow-1">{description}</Card.Text>
        <Button
          variant="primary"
          href={ghLink}
          target="_blank"
          className="github-button mt-auto"
        >
          <BsGithub /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;