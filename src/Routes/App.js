import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import About from "../Pages/About";
import Detail from "../Pages/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
