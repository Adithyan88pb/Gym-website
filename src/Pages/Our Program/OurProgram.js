import React from "react";
import {
  Container,
  Row,
  Button,
  Col,
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import "./Our Program.css";
import gym from "../../assets/image/gym.png";
import man from "../../assets/image/man.png";
import muscle from "../../assets/image/muscle.png";
import treadmill from "../../assets/image/treadmill.png";
import { hover } from "@testing-library/user-event/dist/hover";
const card = [
  {
    title: "Cardio Strength",
    p: "Some quick example text to build on the card title and make",
    img: gym,
  },
  {
    title: "Fat Lose",
    p: "Some quick example text to build on the card title and make",
    img: man,
  },
  {
    title: "Muscle gain",
    p: "Some quick example text to build on the card title and make",
    img: muscle,
  },
  {
    title: "Nutrition Food",
    p: "Some quick example text to build on the card title and make",
    img: treadmill,
  },
];
function OurProgram() {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="main_Program">
              <h1>Explore Our Program</h1>
            </div>
          </Col>
        </Row>

        <Row style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          {card.map((item, index) => (
            <Col lg="3">
              <Card
                className="adithyan"
                style={{
                  background: "#1e43494d",
                  color: "#fff",
                  borderRadius: "20px",
                  fontFamily: "var(--font-name) ",
                }}
              >
                <CardBody>
                  <img src={item.img} alt="" width="50px" />
                  <CardTitle tag="h5">{item.title}</CardTitle>
                  <CardText className="paragrap">{item.p}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default OurProgram;
