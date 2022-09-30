import { Container, Row } from "react-bootstrap";

export default function ProjectsHeader() {
  return (
    <Container className="proj-header-cont" fluid>
      <Row>
        <h2 className="d-flex justify-content-center align-items-center section-header">
          My Projects
        </h2>
      </Row>
    </Container>
  );
}
