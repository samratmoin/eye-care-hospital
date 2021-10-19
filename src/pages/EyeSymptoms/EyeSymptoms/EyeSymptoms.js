import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EyeSymptom from "../EyeSymptom/EyeSymptom";

const EyeSymptoms = () => {
  const [conditions, setconditions] = useState([]);

  useEffect(() => {
    fetch("/eye_symptoms.json")
      .then((res) => res.json())
      .then((data) => setconditions(data));
  }, []);

  return (
    <div>
      <Container className="py-5 top-courses">
        <div className="text-center text-dark py-5">
          <h1 className="display-3">Common Eye Symptoms</h1>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {conditions.map((condition) => (
            <EyeSymptom key={condition.id} condition={condition}></EyeSymptom>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EyeSymptoms;
