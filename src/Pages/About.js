import React from "react";
import Header from "../Components/Header";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <div>
      <Header />
      <Container className="d-flex justify-content-center">
        <Row>
          <Col lg="4">
            <div className="card m-4" style={{ width: "18rem" }}>
              <Image
                id="cardImg"
                src="../Assets/foto.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">
                  <span>Muhamad Ajie Darmawan</span>
                </p>
                <p className="text-center">Frontend Developer</p>
              </div>
            </div>
          </Col>
          <Col className="mt-5">
            <p>
              Hello, my name is Muhamad Ajie Darmawan, I am a Frontend Web
              Developer, have at least 1 year experience in Frontend and Backend
              web development, whether using React JS or Laravel.
            </p>
            <p>
              a graduate of the programming bootcamp at Alterra Academy. During
              my previous role at Alterra Academy, I created website view
              projects using Adobe XD with HTML, CSS, JAVASCRIPT, and React JS
              frameworks
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
