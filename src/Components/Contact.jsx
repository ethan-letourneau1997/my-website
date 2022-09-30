import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import headshot from "../img/webp/ethan-headshot.webp";
import { Icon } from "@iconify/react";

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="contact-container" fluid>
      <Row>
        <h2 className="d-flex justify-content-center section-header">
          Contact Me
        </h2>
      </Row>
      <Row>
        <Col className="left-col">
          <img src={headshot}></img>
        </Col>
        <Col className="right-col">
          <p>(804)441-5738</p>
          <p>ethan.michael.letourneau@gmail.com</p>
          <div className="socials">
            <Button
              variant="dark"
              href="mailto: ethan.michael.letourneau@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Icon icon="fluent:mail-16-filled" color="white" />
            </Button>
            <Button
              variant="dark"
              href="https://www.linkedin.com/in/ethan-letourneau-26b387147/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="akar-icons:linkedin-box-fill" color="white" />
            </Button>
            <Button
              variant="dark"
              href="https://github.com/ethan-letourneau1997"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="bi:github" />
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Button
          className="modal-btn"
          variant="outline-light"
          onClick={handleShow}
        >
          Attributions
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attributions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                Photo by{" "}
                <a href="https://unsplash.com/@r3dmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Jonatan Pie
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </li>
              <li>
                Icons by <a href="https://iconify.design/">Iconify</a>
              </li>
              <li>
                Mockup images by{" "}
                <a href="https://www.anthonyboyd.graphics/">Anthony Boyd</a>
              </li>
              <li>
                A special thanks to my amazing fiance Abbi, for her endless
                support and neverending faith in me.
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}
