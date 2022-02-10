import Header from "../Components/Header";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Create() {
  return (
    <div>
      <Header />
      <h1>INI CREATE</h1>
      <Container>
        <Row>
          <Col lg="2"></Col>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={12}
                  type="text"
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
