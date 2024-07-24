import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Style/about.css";

function MissionCard({ id, img, title, description }) {
  return (
    <Card
      style={{
        width: "20rem",
        border: "none",
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <div className="card-mission-flex">
          <Card.Title className="fs-4 card-mission-title">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MissionCard;
