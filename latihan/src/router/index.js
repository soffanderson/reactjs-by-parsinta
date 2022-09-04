import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import NotFoundPage from "../views/errors/NotFoundPage";

function Router(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Router;
