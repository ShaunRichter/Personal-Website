import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imgPath, title, description, ghLink }) => {
  return (
    <Card className="project-card-view">
      {imgPath && <Card.Img variant="top" src={imgPath} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={ghLink} target="_blank" className="github-button">
          <BsGithub /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
