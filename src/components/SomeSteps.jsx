import Card from "react-bootstrap/Card";

function SomeSteps({ img, title, description }) {
  return (
    <Card className="card-step" style={{ width: "18rem" }}>
      <Card.Img className="step-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="step-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SomeSteps;
