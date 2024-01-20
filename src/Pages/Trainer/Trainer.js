import React from "react";
import "./Trainer.css";
import { Container, Row, Col } from "reactstrap";

const trainers = [
  {
    img: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sijo",
    title: " GYM Founter",
  },
  {
    img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Gokul Krishnan ",
    title: "Senior Trainer",
  },
  {
    img: "https://images.pexels.com/photos/5327523/pexels-photo-5327523.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Gokul Krishnan ",
    title: "Senior Trainer",
  },
];
function Trainer() {
  return (
    <Container className="container-conatiner">
      <Row>
        <Col lg="12" className="container-main-swec pb-3">
          <div className="h1_main">
            <h1>Our Most Exprienced Trainers</h1>
            <div className="div-line"></div>
          </div>
        </Col>
      </Row>
      <Row>
        {trainers.map((items, index) => (
          <Col lg="4" key={index}>
            <div class="trainer">
              <img src={items.img} alt="image" width="350px" />
              <h3 class="secondar11">{items.name}</h3>
              <p class="tertiary">{items.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Trainer;
