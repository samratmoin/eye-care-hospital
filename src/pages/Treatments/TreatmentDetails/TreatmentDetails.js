import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const TreatmentDetails = () => {
  const { treatmentId } = useParams();

  const [treatments, setTreatments] = useState([]);
  const [singleTreatment, setSingleTreatment] = useState({});

  useEffect(() => {
    fetch("/clinical_services.json")
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, []);

  useEffect(() => {
    const foundTreatment = treatments?.find((tr) => tr?.id == treatmentId);
    setSingleTreatment(foundTreatment);
  }, [treatments, treatmentId]);
  return (
    <div>
      <Container>
        <Row className="justify-content-center py-5">
          <Card className="p-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={singleTreatment?.img} />
            <Card.Body>
              <Card.Title>{singleTreatment?.name}</Card.Title>
              <Card.Text>{singleTreatment?.category}</Card.Text>
              <p>{singleTreatment?.details}</p>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default TreatmentDetails;
