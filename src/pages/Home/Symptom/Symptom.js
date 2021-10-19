import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Symptom = (props) => {
  const { id, name, img } = props.symptom;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/symptom/${id}`);
  };
  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", height: "400px", borderRadius: "20px" }}
          className="p-4 text-center"
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Button
            onClick={handleClick}
            className="text-center rounded-3"
            style={{
              border: 0,
              backgroundColor: "#ff3f8b",
              color: "white",
              fontWeight: 500,
            }}
          >
            Symptom Details
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default Symptom;
