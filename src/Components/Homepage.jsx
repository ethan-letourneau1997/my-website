import { Container, Row, Button } from "react-bootstrap";

export default function Homepage() {
  return (
    <Container className="homepage-container" fluid>
      <Row className="home-header-row">
        <div className="header-wrap">
          <h1 className="d-flex justify-content-center">Ethan Letourneau</h1>
          <h2 className="d-flex justify-content-center">Web Developer</h2>
          <div className="homepage-butn-wrapper">
            <Button variant="outline-light" size="lg" href="#about">
              Learn More
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
}
