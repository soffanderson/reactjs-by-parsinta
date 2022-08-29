import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";

function Router(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Router;
