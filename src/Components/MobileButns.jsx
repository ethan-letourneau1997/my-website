import { Button } from "react-bootstrap";

export default function MobileButns(props) {
  return (
    <div>
      <div className="mob-button-wrapper d-lg-none">
        <Button
          size="sm"
          variant="outline-light"
          href={props.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </Button>
        <Button
          size="sm"
          variant="outline-light"
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </Button>
      </div>
    </div>
  );
}
