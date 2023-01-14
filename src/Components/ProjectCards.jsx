import { Container, Row, Col, Button } from "react-bootstrap";
import tent from "../img/card-img/tent.png";
import { Icon } from "@iconify/react";
import nasa from "../img/card-img/nasa.png";
import { useState } from "react";
import card1 from "../img/card-img/tile1.png";
import card2 from "../img/card-img/tile2.png";
import card4 from "../img/card-img/card-4bg.png";

export default function ProjectCards() {
  // const [card1, setCard1] = useState(false);

  // const enterCard1 = () => {
  //   setCard1(true);
  //   console.log("testing, testing");
  // };

  // const leaveCard1 = () => {
  //   setCard1(false);
  //   console.log("testing, testing");
  // };

  return (
    <Container fluid className="card-container">
      <Row>
        <Col xl={4} lg={6} md={6} className="card-col">
          <div class="testContainer">
            <img src={card1} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">
                {" "}
                <p>
                  Full Stack Inventory Management Application for the fictional
                  retailer Great Outdoors
                </p>
                <div className="card-btns">
                  <Button className="card-butn" variant="outline-light">
                    Demo
                  </Button>
                  <Button className="card-butn" variant="outline-light">
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} lg={6} md={6} className="card-col">
          <div className="card">
            <div className="card-img-wrapper card2-wrapper">
              <div className="card-content">
                <p>A fresh imagining of the NASA Homepage.</p>
                <div className="card-btns">
                  <Button className="card-butn" variant="outline-light">
                    Demo
                  </Button>
                  <Button className="card-butn" variant="outline-light">
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} lg={6} md={6} className="card-col">
          <div class="testContainer">
            <img src={card2} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">
                {" "}
                <p>A fresh imagining of the NASA Homepage.</p>
                <div className="card-btns">
                  <Button className="card-butn" variant="outline-light">
                    Demo
                  </Button>
                  <Button className="card-butn" variant="outline-light">
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} lg={6} md={6} className="card-col">
          <div class="testContainer">
            <img src={card4} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">
                {" "}
                <p>An application where a user can build their Resume</p>
                <div className="card-btns">
                  <Button className="card-butn" variant="outline-light">
                    Demo
                  </Button>
                  <Button className="card-butn" variant="outline-light">
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xl={4} lg={6} md={6} className="card-col">
          <div className="card card5 ">
            <div className="calc-screen">CALCULATOR</div>
          </div>
        </Col>
        <Col xl={4} lg={6} md={6} className="card-col">
          <div className="card card6 ">
            <div className="card6-wrapper">
              <p>Weather</p>
              <p>Forecast</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
