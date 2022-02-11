import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

function Detail() {
  let { id } = useParams();
  const [dataById, setDataById] = useState("");

  useEffect(() => {
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
  }, [id]);

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h1 className="text-center mb-3">{dataById.title}</h1>
        <p>{dataById.content}</p>
        <div className="mt-3">
          <Button className="me-3">Kembali</Button>
          <Button variant="success">Edit</Button>
        </div>
      </Container>
    </div>
  );
}

export default Detail;
