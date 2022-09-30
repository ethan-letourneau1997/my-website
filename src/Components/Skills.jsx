import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export default function Skills() {
  return (
    <Container fluid className="skills-container">
      <Row>
        <h2 className="skills-head skill-col d-flex justify-content-center align-items-center">
          My Skills
        </h2>
      </Row>
      <Row>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <Parallax
            scale={[0.1, 3]}
            children={
              <div className="skill-wrapper">
                <Icon icon="vscode-icons:file-type-html" />
                <p>Html</p>
              </div>
            }
          />
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="vscode-icons:file-type-css" />
            <p>CSS</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:javascript" />
            <p>Javascript</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:react" />
            <p>React</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:bootstrap" />
            <p>Bootstrap</p>
          </div>
        </Col>

        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:figma" />
            <p>Figma</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="fontisto:nodejs" />
            <p>Node.js</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:webpack" />
            <p>Webpack</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="bi:git" />
            <p>Git</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:python" />
            <p>Python</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="logos:mongodb-icon" />
            <p>MongoDB</p>
          </div>
        </Col>
        <Col
          xl={2}
          lg={3}
          md={3}
          sm={4}
          xs={4}
          className="skill-col d-flex justify-content-center align-items-center"
        >
          <div className="skill-wrapper">
            <Icon icon="simple-icons:gimp" />
            <p>GMP</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
