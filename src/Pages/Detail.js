import Header from "../Components/Header";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Modal, Form } from "react-bootstrap";

function Detail() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [dataById, setDataById] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getDataById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataById = () => {
    axios
      .get(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
      .then(function (response) {
        const result = response.data;
        setDataById(result);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEdit = (dataById) => {
    setShowEdit(true);
    setTitle(dataById.title);
    setContent(dataById.content);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://limitless-forest-49003.herokuapp.com/posts/${id}`, {
        title: title,
        content: content,
      })
      .then(function (response) {
        const result = response.data;
        handleClose();
        getDataById();
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClose = () => {
    setShowEdit(false);
    clearState();
  };

  const clearState = () => {
    setTitle("");
    setContent("");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Modal
          size="lg"
          show={showEdit}
          onHide={() => setShowEdit(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Title or Content
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
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
                  value={content}
                  name="content"
                  as="textarea"
                  rows={12}
                  type="text"
                  required
                  placeholder="Your text ..."
                />
              </Form.Group>
              <Button onClick={(e) => handleUpdate(e)}>SIMPAN</Button>
              <Button
                className="ms-3"
                variant="secondary"
                onClick={handleClose}
              >
                CANCEL
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <h1 className="text-center mb-3">{dataById.title}</h1>
        <p>{dataById.content}</p>
        <div className="mt-3">
          <Button className="me-3" onClick={() => handleBack()}>
            Kembali
          </Button>
          <Button
            onClick={() => handleEdit(dataById)}
            className="ms-lg-3"
            variant="success"
          >
            Edit
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Detail;
