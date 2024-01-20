import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Winners.css";
const cardItems = [
  {
    imag: "https://techsolutions.liveas.in/static/templates/images/22743605469sijo%20thomas.png",
    title: "Sijo Thomas",
    description: "",
  },
  {
    imag: "https://techsolutions.liveas.in/static/templates/images/22764855426gokul%20krishna.png",
    title: "Gokul Krishnan",
    description:
      "2020 sub jr mr aleppy, 2021 sub jr mr aleppy, 2021 sub jr mr kerala",
  },
  {
    imag: "https://techsolutions.liveas.in/static/templates/images/22773781672shambudinesh.png",
    title: "Shambu Dinesh",
    description: "",
  },
  {
    imag: "https://techsolutions.liveas.in/static/templates/images/22773692718abhijithh.png",
    title: "Abhijith",
    description: "",
  },
  {
    imag: "https://techsolutions.liveas.in/static/templates/images/22773781672shambudinesh.png",
    title: "Sethu kamal",
    description: "2020 jr mr aleppy",
  },
  {
    imag: "https://techsolutions.liveas.in/static/templates/images/22773781672shambudinesh.png",
    title: "Sethu kamal",
    description: "2020 jr mr aleppy",
  },
];
function Winners() {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="container-h1">
            <h1> Championship Winner's</h1>
            <div className="div-line"></div>
          </div>
        </Col>
      </Row>
      <Row>
        {cardItems.map((items) => (
          <Col lg="4">
            <div
              className="card container-card"
              style={{ width: "18rem", border: "none" }}
            >
              <img src={items.imag} alt="" className="image" />
              <div className="card-body main-cards">
                <h5 className="card-title text-center">{items.title}</h5>
                <p className="card-text text-center">{items.description}</p>
                {/* <a href="#" className="btn btn-primary">
                
              </a> */}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Winners;
