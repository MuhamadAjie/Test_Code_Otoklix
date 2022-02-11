import React, { useState, useEffect } from "react";
import axios from "axios";
import Api from "../Utils/Api";
import { Container, Row, Image, Card, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "../CSS/Home.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Home() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [showEdit, setShowEdit] = useState(false);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(Api.allPosts)
      .then(function (response) {
        const result = response.data;
        setData(result);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
          .then(function (response) {
            const result = response.data;
            setData(result);
            console.log(result);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  // const handleEdit = (item) => {
  //   setShowEdit(true);
  //   setTitle(item.title);
  //   setContent(item.content);
  // };

  // const handleUpdate = (id) => {
  //   axios
  //     .put(`https://limitless-forest-49003.herokuapp.com/posts/${id}`, {
  //       title: title,
  //       content: content,
  //     })
  //     .then(function (response) {
  //       const result = response.data;
  //       setData(result);
  //       console.log(result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const handleClose = () => {
  //   setShowEdit(false);
  //   clearState();
  // };

  // const clearState = () => {
  //   setTitle("");
  //   setContent("");
  // };

  return (
    <div className={styles.colorBody}>
      <Header />

      <Image src="../Assets/work-desk.jpg" style={{ width: "100%" }} />
      <Container>
        {/* Modal Edit
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
            <form>
              <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={data.title}
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  placeholder="title"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="content">Content</label>
                <input
                  onChange={(e) => setContent(e.target.value)}
                  value={data.content}
                  type="text"
                  className="form-control"
                  id="content"
                  as="textarea"
                  rows={10}
                  required
                  placeholder="content"
                />
              </div>
              <Button onClick={() => handleUpdate(data.id)}>SIMPAN</Button>
              <Button
                className="ms-3"
                variant="secondary"
                onClick={handleClose}
              >
                CANCEL
              </Button>
            </form>
          </Modal.Body>
        </Modal> */}

        <div className="text-center mt-5">
          <p className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center">
            <span className={styles.spanList}></span>Blog
            <span className={styles.spanList}></span>
          </p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mt-5">
            <Row>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className={styles.textStyle}>
                    {item.content}
                  </Card.Text>
                  <div className="mt-5">
                    <Button
                      onClick={() => handleDetail(item.id)}
                      className="ms-lg-3"
                      variant="warning"
                    >
                      Read More
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      className="ms-lg-3"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </div>
        ))}
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
