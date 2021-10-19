import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Treatment from "../Treatment/Treatment";

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    fetch("/clinical_services.json")
      .then((res) => res.json())
      .then((data) => setTreatments(data));
  }, []);
  return (
    <div>
      <Container className="py-5 top-courses">
        <div className="text-center text-dark py-5">
          <h1 className="display-3">Eye Conditions & Treatments</h1>
        </div>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {treatments.map((treatment) => (
            <Treatment key={treatment.id} treatment={treatment}></Treatment>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
