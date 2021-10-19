import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const EyeSymptom = (props) => {
  const { id, name, img } = props.condition;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/symptom/${id}`);
  };

  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", height: "400px", borderRadius: "15px" }}
          className="p-4 text-center"
        >
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Button
            onClick={handleClick}
            className="text-center p-2"
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

export default EyeSymptom;
