import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <Container className="py-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <h2>Eye Care Hospital</h2>
            <p> Dhaka, Bangladesh</p>
            <p>Helpline : 01722267058 (Available : 10:00am to 5:00pm)</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <table>
              <tr>
                <td>About us</td>
              </tr>
              <tr>
                <td>Contact us</td>
              </tr>
              <tr>
                <td>Privacy Policy</td>
              </tr>
              <tr>
                <td>Terms of Service</td>
              </tr>
            </table>
          </div>
          <p className="lead mt-5 text-center">
            Copyright © 2021 Eye Care Hospital
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
