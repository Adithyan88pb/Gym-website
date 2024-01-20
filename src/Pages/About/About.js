import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import "./About.css";
import aboutLogo from "../../assets/image/2274350308815b2807e-e121-4841-8060-7aff8738b3b0.jpg";
function About() {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="about_text text-center pt-5 text-light">
            <h1>About Us</h1>
          </div>
        </Col>
        <Col lg="6">
          <div className="about_main">
            <h1>
              <span style={{ color: "red" }}>Why Choose</span> Us?
            </h1>
            <h4>Consulatation with Expert.</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, nam.Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Delectus, nam.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Delectus, nam.
            </p>
          </div>
          <div className="btn-main">
            <Button className="btn primary__btn">Booking Now</Button>
          </div>
        </Col>
        <Col lg="6">
          <img
            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/why-us.png"
            alt=""
            width="80%"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
