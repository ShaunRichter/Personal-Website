import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);

  const handleScroll = () => {
    setNavScrolled(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      className={`custom-navbar ${navScrolled ? "scrolled" : ""}`}
    >
      <Container className="navbar-container">
        <Nav className="navbar-links mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;