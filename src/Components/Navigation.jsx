import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from "react";

export default function Navigation() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.pageYOffset > window.innerHeight * 0.9) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar variant="dark" expand="lg" fixed="top">
      <Container
        className={colorChange ? "nav-container colorChange" : "nav-container"}
        fluid
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
