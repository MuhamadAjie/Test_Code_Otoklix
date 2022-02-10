import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

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
      <h1>INI DETAIL</h1>
      <Container className="mb-5">
        <p>{dataById.title}</p>
        <p>{dataById.content}</p>
      </Container>
    </div>
  );
}

export default Detail;
