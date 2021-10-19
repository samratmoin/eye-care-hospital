import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const ClinicalService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/clinical_services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-center text-dark py-5 display-3">
          Eye Conditions & Treatments
        </h1>
        <Row xs={1} md={2} className="g-5">
          {services.slice(4, 8).map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ClinicalService;
