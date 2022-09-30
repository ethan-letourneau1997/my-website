import { Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="contact-container" fluid>
      <Row>
        <h2 className="d-flex justify-content-center">Contact Me</h2>
      </Row>
      <Row>
        <ul>
          <li>(804)441-5738</li>
          <li>ethan.michael.letourneau@gmail.com</li>
        </ul>
      </Row>
    </Container>
  );
}
