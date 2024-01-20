import React from "react";
import "./ServicesCard.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

const ACard = [
  {
    serviceName: "Yoga Class",
    serviceDescription: "This is a description of Service 2.",
    serviceImage:
      "https://cdn.vectorstock.com/i/preview-1x/21/62/yoga-icon-vector-8092162.webp",
  },
  {
    serviceName: "Zumba Class",
    serviceDescription: "This is a description of Service 2.",
    serviceImage: "https://cdn-icons-png.flaticon.com/128/12155/12155931.png",
  },
  {
    serviceName: "Spining Class",
    serviceDescription: "This is a description of Service 2.",
    serviceImage:
      "https://media.istockphoto.com/id/1328183459/vector/woman-working-out-on-an-exercise-bike.jpg?s=612x612&w=0&k=20&c=AfpOG9B8E6ugU1KoMGiFQUlc7BFTbGrAlE1YTO3-Xz4=",
  },
  {
    serviceName: "Personal Training",
    serviceDescription: "This is a description of Service 2.",
    serviceImage:
      "data:image/png;base64,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",
  },
];
function ServicesCard() {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="about_text  pt-5 text-light">
            <h1>Services</h1>
            <div className="div-line"></div>
          </div>
        </Col>
      </Row>
      <Row>
        {ACard.map((itemsCarsd) => (
          <Col lg="3" className="container-Card">
            <Card className="services-card" id="services-card">
              <CardImg
                src={itemsCarsd.serviceImage}
                alt={itemsCarsd.serviceName}
              />
              <CardBody>
                <CardTitle tag="h3">{itemsCarsd.serviceName}</CardTitle>
                <CardText>{itemsCarsd.serviceDescription}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesCard;
