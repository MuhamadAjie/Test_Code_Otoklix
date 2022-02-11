import Header from "../Components/Header";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://limitless-forest-49003.herokuapp.com/posts", {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <h1>INI CREATE</h1>
      <Container>
        <Row>
          <Col lg="2"></Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  type="text"
                  required
                  placeholder="Enter title"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  onChange={(e) => setContent(e.target.value)}
                  name="content"
                  as="textarea"
                  rows={12}
                  type="text"
                  required
                  placeholder="Your text ..."
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Create;
