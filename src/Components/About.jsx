import { Container, Row, Col } from "react-bootstrap";
import ethanHeadshot from "../img/webp/ethan-headshot.webp";
import { Icon } from "@iconify/react";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function About() {
  const [targetElement, setTarget] = useState();
  const targetRef = useRef();
  useEffect(() => {
    setTarget(targetRef.current);
  }, [targetRef]);

  return (
    <div>
      <Container className="target-container">
        <div className="target" ref={targetRef}></div>
      </Container>
      <Container className="about-container" id="about" fluid>
        <Row id="about">
          <Col xl={6} lg={6} md={12} className="about-col">
            <h2>About Me</h2>
            <p>
              I am a self taught frontend developer with a master’s degree in
              information technology. I create responsive websites and
              applications with (and without) tools like Bootstrap and React. I
              also have experience in database design and implementation, data
              analysis, and machine learning.{" "}
            </p>
          </Col>
          <Col className="headshot-col" xl={6} lg={6} md={12}>
            <img className="ethan-img" src={ethanHeadshot}></img>
          </Col>
        </Row>
      </Container>
      <Container fluid className="skills-container">
        <Row>
          <h2 className="skills-head skill-col d-flex justify-content-center align-items-center">
            My Skills
          </h2>
        </Row>
        <Row>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="vscode-icons:file-type-html" />
                  <p>Html</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="vscode-icons:file-type-css" />
                  <p>CSS</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:javascript" />
                  <p>JavaScript</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:react" />
                  <p>React</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:bootstrap" />
                  <p>Bootstrap</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:figma" />
                  <p>Figma</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="fontisto:nodejs" />
                  <p>Node.js</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:webpack" />
                  <p>Webpack</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="bi:git" />
                  <p>Git</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:python" />
                  <p>Python</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="logos:mongodb-icon" />
                  <p>MongoDB</p>
                </div>
              }
            />
          </Col>
          <Col xl={2} lg={3} md={3} sm={4} xs={4} className="skill-col ">
            <Parallax
              scale={[0.1, 1]}
              targetElement={targetElement}
              children={
                <div className="skill-wrapper">
                  <Icon icon="simple-icons:gimp" />
                  <p>GMP</p>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
