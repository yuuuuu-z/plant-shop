import Card from "react-bootstrap/Card";
import "../Style/serviceprovice.css";
function ServiceProvice({ id, img, title, description }) {
  return (
    <Card style={{ width: "15rem", border: "none" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column gap-3">
        <Card.Title className="fs-4 text-success">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceProvice;
