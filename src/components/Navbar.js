import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

// Custom hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

const CustomNavbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop navbar only */}
      {!isMobile && (
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
      )}

      {/* Mobile hamburger and menu only */}
      {isMobile && (
        <>
          {/* Hamburger icon on the left */}
          {!mobileOpen && (
            <button
              className="hamburger-btn left"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              style={{ left: 16, right: 'auto', position: 'fixed', top: 14, zIndex: 1002 }}
            >
              <FaBars size={28} color="#fff" />
            </button>
          )}
          <div className={`mobile-menu drawer ${mobileOpen ? "open" : ""}`}>
            {/* Close (X) icon at the top right of the drawer */}
            <div className="drawer-header">
              <button
                className="close-btn"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <FaTimes size={28} color="#fff" />
              </button>
            </div>
            <Nav className="mobile-links centered-links" onClick={() => setMobileOpen(false)}>
              {isHome ? (
                <>
                  <a className="nav-link" href="#home">Home</a>
                  <a className="nav-link" href="#about">About</a>
                  <a className="nav-link" href="#projects">Projects</a>
                  <a className="nav-link" href="#contact">Contact</a>
                  <Link className="nav-link" to="/resume">Resume</Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/#home">Home</Link>
                  <Link className="nav-link" to="/#about">About</Link>
                  <Link className="nav-link" to="/#projects">Projects</Link>
                  <Link className="nav-link" to="/#contact">Contact</Link>
                  <Link className="nav-link" to="/resume">Resume</Link>
                </>
              )}
            </Nav>
          </div>
          {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
        </>
      )}
    </>
  );
};

export default CustomNavbar;
