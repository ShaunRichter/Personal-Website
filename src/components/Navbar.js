import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    setNavScrolled(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="md" className={`custom-navbar ${navScrolled ? "scrolled" : ""}`}>
      <Container className="navbar-container">
        <Nav className="navbar-links mx-auto">
          {isHome ? (
            <>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/#about">About</Nav.Link>
              <Nav.Link as={Link} to="/#projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;