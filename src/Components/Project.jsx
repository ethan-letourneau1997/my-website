import { Container, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Proj from "./Proj";
import MobileButns from "./MobileButns";

export default function Project() {
  return (
    <Container className="project-container" id="projects" fluid>
      <Row>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <Proj
            name="Great Outdoors"
            description="Inventory Management Application"
            imageClass="great-outdoors-img"
            demo="https://great-outdoors-inv-management.herokuapp.com/catalog/items"
            code="https://github.com/ethan-letourneau1997/Great-Outdoors-Inventory-Management"
          />
          <div className="proj-skills">
            <span>Built With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
            <Icon icon="fontisto:nodejs" />
            <Icon icon="logos:mongodb-icon" />
          </div>
          <MobileButns
            demo="https://great-outdoors-inv-management.herokuapp.com/catalog/items"
            code="https://github.com/ethan-letourneau1997/Great-Outdoors-Inventory-Management"
          />
        </Col>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <Proj
            name="Connect Social"
            description="Responsive Social Media Landing Page"
            imageClass="connect-social-img"
            demo="https://connect-social-bxu2.vercel.app/"
            code="https://github.com/ethan-letourneau1997/Connect-Social"
          />

          <div className="proj-skills">
            <span>Built With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
            <Icon icon="logos:webpack" />
            <Icon icon="logos:react" />
          </div>
          <MobileButns
            demo="https://connect-social-bxu2.vercel.app/"
            code="https://github.com/ethan-letourneau1997/Connect-Social"
          />
        </Col>

        <Col className="project-col odd" xl={6} lg={6} md={12}>
          <Proj
            name="NASA"
            description="NASA Homepage Refresh"
            imageClass="nasa-img"
            demo="https://nasa-redux-beige.vercel.app/"
            code="https://nasa-redux-ethan-letourneau1997.vercel.app/"
          />

          <div className="proj-skills">
            <span>Built With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />
            <Icon icon="logos:webpack" />
            <Icon icon="logos:react" />
          </div>
          <MobileButns
            demo="https://nasa-redux-beige.vercel.app/"
            code="https://nasa-redux-ethan-letourneau1997.vercel.app/"
          />
        </Col>
        <Col className="project-col odd" xl={6} lg={6} md={12}>
          <Proj
            name="Resume Bulder"
            description="View and Build Resumes"
            imageClass="resume-img"
            demo="https://resume-project-two.vercel.app/"
            code="https://github.com/ethan-letourneau1997/resume-project"
          />

          <div className="proj-skills">
            <span>Built With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:bootstrap" />

            <Icon icon="logos:webpack" />
            <Icon icon="logos:react" />
          </div>
          <MobileButns
            demo="https://resume-project-two.vercel.app/"
            code="https://github.com/ethan-letourneau1997/resume-project"
          />
        </Col>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <Proj
            name="Calculator"
            description="Simple Calculator Application"
            imageClass="calc-img"
            demo="https://calculator-ia6lr48wx-ethan-letourneau1997.vercel.app/"
            code="https://github.com/ethan-letourneau1997/calculator"
          />

          <div className="proj-skills">
            <span>Built With:</span>
            <Icon icon="vscode-icons:file-type-html" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="logos:javascript" />
          </div>
          <MobileButns
            demo="https://calculator-ia6lr48wx-ethan-letourneau1997.vercel.app/"
            code="https://github.com/ethan-letourneau1997/calculator"
          />
        </Col>
        <Col className="project-col even" xl={6} lg={6} md={12}>
          <Proj
            name="Weather Forecast"
            description="Weather Forecast App using openweather API"
            imageClass="weather-img"
            demo=""
            code="https://github.com/ethan-letourneau1997/weather-app"
          />
          <div className="proj-skills">
            <span>Built With:</span>
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
