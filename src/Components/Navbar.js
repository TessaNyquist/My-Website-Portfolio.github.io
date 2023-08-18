//import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
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
    <Container>
      <Navbar className="Navbar" data-bs-theme="dark">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Projects</Nav.Link>
          <Nav.Link href="#link">Résumé</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
