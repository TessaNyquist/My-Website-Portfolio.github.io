import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

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
