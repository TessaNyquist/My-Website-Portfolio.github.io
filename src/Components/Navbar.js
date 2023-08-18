//import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

/**
 * I want this navbar to be sticky at the top to give the page the feeling that it is floating.
 * 
 * @returns 
 */
function NavBar() {
  return (
    <Navbar className="Navbar" data-bs-theme="dark" sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">
        Your Logo
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/resume">
          Résumé
        </Nav.Link>
        <Nav.Link as={Link} to="/blog">
          Blog
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;
