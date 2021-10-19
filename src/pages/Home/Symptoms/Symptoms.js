import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Symptom from "../Symptom/Symptom";

const Symptoms = () => {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    fetch("/eye_symptoms.json")
      .then((res) => res.json())
      .then((data) => setSymptoms(data));
  }, []);
  return (
    <div>
      <Container className="py-5 top-courses">
        <div className="text-center text-dark py-5">
          <h1 className="display-3">Common Eye Symptoms</h1>
        </div>
        <Row xs={1} md={4} className="g-4">
          {symptoms.slice(0, 4).map((symptom) => (
            <Symptom key={symptom.id} symptom={symptom}></Symptom>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Symptoms;
