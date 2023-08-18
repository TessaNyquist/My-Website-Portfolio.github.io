import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ContactMe.css";

/**
 * This method currently outlines the ContactMe method at the bottom of my webpage.
 *
 * @returns
 */
function ContactMeForm() {
  return (
    <Container>
      <Form className="ContactMe">
        <p> Contact Me </p>
        <Row className="NameRow"></Row>
        <Form.Group as={Row} controlId="formGridName">
          <Form.Label>First Name:   </Form.Label>
          <Form.Control type="first name" placeholder="First Name" />
          <Form.Label>  Last Name:    </Form.Label>
          <Form.Control type="Last name" placeholder="Last Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email:    </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMessage">
          <Form.Label>Message:  </Form.Label>
          <Form.Control type="message" placeholder="Enter message" />
        </Form.Group>

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactMeForm;
