import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-5.jpg";
import banner2 from "../../../images/banner/banner-4.jpg";
import banner3 from "../../../images/banner/banner-6.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="eye" />
          <Carousel.Caption>
            <h3>Central Vision Loss</h3>
            <p>
              Central vision loss can occur when a person suffers from
              age-related macular degeneration and/or diabetic retinopathy. It
              starts with a small dark spot in the centre of the vision that
              gets larger over time. Central vision loss can progress very
              quickly. If this happens, you should consult an eye doctor for an
              evaluation immediately.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Colour Blindness</h3>
            <p>
              The most common form of colour blindness is known as red/green
              colour blindness. For the vast majority of people with deficient
              colour vision. the condition is genetic and inherited from their
              mother, although some people become colour blind as a result of
              diseases such as certain inherited retinal diseases
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Swollen Eye</h3>
            <p>
              Swelling of the eyes refers to the presence of excess fluid
              (oedema) in the connective tissues around the eye along the
              eyelids. Various causes of a swollen eye include conjunctivitis;
              blepharitis; infections; insect bites; and allergies to new drugs
              or cosmetics. More serious, potentially sight-threatening causes
              of eyelid swelling include orbital cellulitis, thyroid eye disease
              and trauma or injury to the eye area.Since the causes are
              wide-ranging
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
