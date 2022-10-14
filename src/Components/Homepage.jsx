import { Container, Row, Button } from "react-bootstrap";
import hero from "../img/webp/heroTint20.webp";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function Homepage() {
  return (
    <ParallaxBanner
      id="home"
      className="para-banner"
      style={{ aspectRatio: "2 / 1" }}
    >
      <ParallaxBannerLayer className="layer1" image={hero} speed={0} />

      <ParallaxBannerLayer
        speed={-10}
        children={
          <Container className="homepage-container" fluid>
            <Row className="home-header-row">
              <div className="header-wrap">
                <h1 className="d-flex justify-content-center">
                  Ethan Letourneau
                </h1>
                <h2 className="d-flex justify-content-center">Web Developer</h2>
                <div className="homepage-butn-wrapper">
                  <Button variant="outline-light" size="lg" href="#about">
                    Learn More
                  </Button>
                </div>
              </div>
            </Row>
          </Container>
        }
      />
    </ParallaxBanner>
  );
}
