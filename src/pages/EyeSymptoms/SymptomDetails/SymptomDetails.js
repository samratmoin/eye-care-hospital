import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const SymptomDetails = () => {
  const { symptomId } = useParams();

  const [symptoms, setSymptoms] = useState([]);
  const [singleSymptom, setSingleSymptom] = useState({});

  useEffect(() => {
    fetch("/eye_symptoms.json")
      .then((res) => res.json())
      .then((data) => setSymptoms(data));
  }, []);

  useEffect(() => {
    const foundSymptom = symptoms?.find((symptom) => symptom?.id == symptomId);
    setSingleSymptom(foundSymptom);
  }, [symptoms, symptomId]);

  return (
    <div>
      <Container>
        <Row className="justify-content-center py-5">
          <Card className="p-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={singleSymptom?.img} />
            <Card.Body>
              <Card.Title>{singleSymptom?.name}</Card.Title>
              <Card.Text>{singleSymptom?.category}</Card.Text>
              <p>{singleSymptom?.details}</p>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default SymptomDetails;
