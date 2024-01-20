import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import "./Home.css";
import About from "../About/About";
import OurProgram from "../Our Program/OurProgram";
import Trainer from "../Trainer/Trainer";
import Contacta from "../Contacta/Contacta";
import Winners from "../Winners/Winners";
import Review from "../../component/Review/Review";
import ServicesCard from "../ServicesCard/ServicesCard";
import ImageGallery from "../ImageGallery/ImageGallery";
function Home() {
  return (
    <>
      <section className="">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content header_main">
                <h1>
                  <span style={{ color: "red" }} className="highlight">
                    Body Style
                  </span>{" "}
                  <br />
                  Fitness Centre & Multi Gym
                </h1>
                <p>
                  Are you looking for a fitness centre? Body Style Fitness
                  Centre & Multi Gym in Alappuzha is the best choice for you. We
                  are one of the best Fitness Centre and Multi Gym in Alappuzha,
                  Kerala.
                </p>
                <Button className="btn primary__btn">Get Started Now</Button>
              </div>
            </Col>
            <Col lg="6">
              <div className=" image_main ">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png"
                  alt="image"
                  width="80%"
                  style={{ margin: "0 24px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <OurProgram />
      <Trainer />
      <About />
      <ServicesCard />
      <ImageGallery/>
      <main>
        <section className="container111">
          <div className="title">
            <h2 style={{ color: "var(--clr-grey-5)" }}>
              What Our Member Say About Us?{" "}
            </h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  );
}

export default Home;
