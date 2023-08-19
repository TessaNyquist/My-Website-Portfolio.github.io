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
      <Nav className="me-auto">
        <Nav.Link as={Link} to="My-Website-Portfolio.github.io/Home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="My-Website-Portfolio.github.io/Projects">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="My-Website-Portfolio.github.io/Résumé">
          Résumé
        </Nav.Link>
        <Nav.Link as={Link} to="My-Website-Portfolio.github.io/Blog">
          Blog
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;
