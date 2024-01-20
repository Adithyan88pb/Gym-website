import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ImageGallery.css";
const ImageGallery = () => {
  return (
    <section className="image-gallery">
      <Container>
        <Row>
          <Col lg="12" className="h2-main   pt-5 pb-5 text-light">
            <h1>Gallery</h1>
            <div className="div-line"></div>
          </Col>
        </Row>
        <Row>
          <Col md="6" lg="4" className="image-row">
            <img
              src="https://images.pexels.com/photos/6551423/pexels-photo-6551423.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
            />
          </Col>
          <Col md="6" lg="4" className="image-row">
            <img
              src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 2"
            />
          </Col>
          <Col md="6" lg="4" className="image-row">
            <img
              src="https://images.pexels.com/photos/3836891/pexels-photo-3836891.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
          </Col>
          <Col md="6" lg="4" className="image-row">
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
          </Col>
          <Col md="6" lg="4" className="image-row">
            <img
              src="https://images.pexels.com/photos/19406297/pexels-photo-19406297/free-photo-of-boxer-putting-on-gloves.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
          </Col>
          <Col md="6" lg="4" className="image-row">
            <img
              src="https://images.pexels.com/photos/1092877/pexels-photo-1092877.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageGallery;
