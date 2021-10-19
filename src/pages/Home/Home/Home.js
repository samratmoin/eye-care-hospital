import React from "react";
import Banner from "../Banner/Banner";
import ClinicalService from "../ClinicalService/ClinicalService";
import Symptoms from "../Symptoms/Symptoms";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Symptoms />
      <ClinicalService></ClinicalService>
    </div>
  );
};

export default Home;
