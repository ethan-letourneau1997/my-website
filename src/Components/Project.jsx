import { Container, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

export default function Project() {
  return (
    <Container className="project-container" fluid>
      <Row>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <div className="project-header">
            <h2>Great Outdoors</h2>
            <h3>Inventory Management Application</h3>
          </div>
          <div className="img-div great-outdoors-img">
            <div className="button-wrapper">
              <Button variant="light" size="lg">
                Demo
              </Button>
              <Button variant="light" size="lg">
                Code
              </Button>
            </div>
          </div>
          <div className="proj-skills">
            <span>Made With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
            <Icon icon="fontisto:nodejs" />
            <Icon icon="logos:mongodb-icon" />
          </div>
        </Col>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <div className="project-header">
            <h2>Connect Social</h2>
            <h3>Responsive Social Media Landing Page</h3>
          </div>

          <div className="img-div connect-social-img">
            <div className="button-wrapper">
              <Button variant="light" size="lg">
                Demo
              </Button>
              <Button variant="light" size="lg">
                Code
              </Button>
            </div>
          </div>
          <div className="proj-skills">
            <span>Made With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
            <Icon icon="logos:webpack" />
            <Icon icon="logos:react" />
          </div>
        </Col>

        <Col className="project-col odd" xl={6} lg={6} md={12}>
          <div className="project-header">
            <h2>NASA</h2>
            <h3>NASA Homepage</h3>
          </div>
          <div className="img-div nasa-img">
            <div className="button-wrapper">
              <Button variant="light" size="lg">
                Demo
              </Button>
              <Button variant="light" size="lg">
                Code
              </Button>
            </div>
          </div>
          <div className="proj-skills">
            <span>Made With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
            <Icon icon="logos:webpack" />
            <Icon icon="logos:react" />
          </div>
        </Col>
        <Col className="project-col odd" xl={6} lg={6} md={12}>
          <div className="project-header">
            <h2>Resume Bulder</h2>
            <h3>View and Build Resumes</h3>
          </div>

          <div className="img-div resume-img">
            <div className="button-wrapper">
              <Button variant="light" size="lg">
                Demo
              </Button>
              <Button variant="light" size="lg">
                Code
              </Button>
            </div>
          </div>
          <div className="proj-skills">
            <span>Made With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />

            <Icon icon="logos:webpack" />
            <Icon icon="logos:react" />
          </div>
        </Col>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <div className="project-header">
            <h2>Calculator</h2>
            <h3>Simple Calculator Application</h3>
          </div>

          <div className="img-div calc-img">
            <div className="button-wrapper">
              <Button variant="light" size="lg">
                Demo
              </Button>
              <Button variant="light" size="lg">
                Code
              </Button>
            </div>
          </div>
          <div className="proj-skills">
            <span>Made With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
          </div>
        </Col>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <div className="project-header">
            <h2>Weather Forecast</h2>
            <h3>Weather Forecast App using openweather API</h3>
          </div>

          <div className="img-div weather-img">
            <div className="button-wrapper">
              <Button variant="light" size="lg">
                Demo
              </Button>
              <Button variant="light" size="lg">
                Code
              </Button>
            </div>
          </div>
          <div className="proj-skills">
            <span>Made With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
