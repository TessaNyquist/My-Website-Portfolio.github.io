import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

/**
 * Renders a custom navigation bar component using React Bootstrap components.
 *
 * The `CustomNavbar` component displays a navigation bar with links to different sections
 * of the website. It uses the `react-router-dom` package for navigation and provides
 * a responsive design using the React Bootstrap `Navbar` and `Nav` components.
 *
 * @returns {JSX.Element} The CustomNavbar component.
 */
function CustomNavbar() {
  return (
    <Navbar className="Navbar" data-bs-theme="dark" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/My-Website-Portfolio.github.io/Home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/My-Website-Portfolio.github.io/Projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/My-Website-Portfolio.github.io/Résumé">
            Résumé
          </Nav.Link>
          <Nav.Link as={Link} to="/My-Website-Portfolio.github.io/Blog">
            Blog
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
