import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/image/Black_White_and_Yellow_Bold_Fitness_Logo-removebg-preview.png";
const quick__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "",
    display: "Services",
  },
];
const quick__links2 = [
  {
    path: "",
    display: "Gallery",
  },
  {
    path: "",
    display: "Contact",
  },
  {
    path: "",
    display: "Services",
  },
];
function footer() {
  const year = new Date().getFullYear();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" style={{ width: "30%" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, in.
              </p>
            </div>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <i class="ri-youtube-line"></i>
              </span>
              <span>
                <i class="ri-github-fill"></i>
              </span>
              <span>
                <i class="ri-facebook-circle-line"></i>
              </span>
              <span>
                <i class="ri-instagram-line"></i>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ul className="footer__quick-links ">
              {quick__links.map((item, index) => (
                <li
                  key={index}
                  className="ps-0 border-0 "
                  style={{
                    color: "#fff",
                  }}
                >
                  <Link to={item.path} onClick={handleClick}>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links </h5>
            <ul className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <li
                  key={index}
                  className="ps-0 border-0"
                  style={{
                    color: "#fff",
                  }}
                >
                  {item.path}
                  {item.display}
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact </h5>
            <ul className="footer__quick-links">
              <li
                className="ps-0 border-0 d-flex align-items-center gap-3"
                style={{
                 
                  color: "#fff",
                }}
              >
                <h6>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address
                </h6>
                <p className="mb-0"> Alapuzha</p>
              </li>
              <li
                className="ps-0 border-0 d-flex align-items-center gap-3"
                style={{
                
                  color: "#fff",
                }}
              >
                <h6>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">Example@gmail.com</p>
              </li>
              <li
                className="ps-0 border-0 d-flex align-items-center gap-3"
                style={{
                  color: "#fff",
                }}
              >
                <h6>
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone
                </h6>
                <p className="mb-0">+9995703991</p>
              </li>
            </ul>
          </Col>
          <Col lg="12 " className="text-center pt-5">
            <p className="copyright">
              Copyright{year}, design and develop by Adithyan .All rights
              reserves.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;
