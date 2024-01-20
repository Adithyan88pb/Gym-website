import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import "./NotFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <Container>
      <Row className=" text-center">
        <div class="section">
          <h1 class="error">404</h1>
          <div class="page">
            Ooops!!! The page you are looking for is not found
          </div>
          <a class="back-home" href="#!">
            <Link to="/"> Back to home</Link>
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default NotFound;
