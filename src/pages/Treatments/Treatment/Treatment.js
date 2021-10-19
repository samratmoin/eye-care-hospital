import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Treatment = (props) => {
  const { id, name, img, category } = props.treatment;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/treatment/${id}`);
  };

  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", height: "400px", borderRadius: "15px" }}
          className="p-4 text-center"
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
          <Button
            onClick={handleClick}
            className="text-center rounded-pill p-2"
            style={{
              border: 0,
              backgroundColor: "#ff3f8b",
              color: "white",
              fontWeight: 500,
            }}
          >
            Treatment Info
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default Treatment;
