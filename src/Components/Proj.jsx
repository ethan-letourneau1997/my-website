import { Button } from "react-bootstrap";

export default function Proj(props) {
  return (
    <div className="proj-div">
      <div className="project-header">
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
      <div className={`img-div ${props.imageClass}`}>
        <div className="image-shell d-none d-lg-block">
          <div className="button-wrapper">
            <Button
              variant="light"
              size="lg"
              href={props.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Button>
            <Button
              variant="light"
              size="lg"
              href={props.code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
