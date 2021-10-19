import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const SingleService = (props) => {
  const { id, name, img, category } = props.service;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/treatment/${id}`);
  };
  return (
    <div>
      <Col>
        <Card
          style={{ height: "500px", borderRadius: "20px" }}
          className="p-4 text-center mb-3"
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{category}</Card.Text>
          </Card.Body>
          <Card.Text>
            <Button
              onClick={handleClick}
              className="py-2 rounded-3"
              style={{
                border: 0,
                backgroundColor: "#ff3f8b",
                color: "white",
                fontWeight: 500,
              }}
            >
              Treatment Info
            </Button>
          </Card.Text>
        </Card>
      </Col>
    </div>
  );
};

export default SingleService;
