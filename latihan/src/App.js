import React from "react";
import Router from "./router";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/errors/NotFoundPage";

function App(props) {
  const NotFound = () => {
    <>
      <Route path="*" element={<NotFoundPage />} />
    </>;
  };

  const DefaultContainer = () => {
    <>
      <Navbar />
      <div className="py-4">
        <Router />
      </div>
    </>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" component={NotFound} />
        <Route component={DefaultContainer} />
      </Routes>

      {/* <Navbar />
        <div className="py-4">
          <Router />
        </div> */}
    </BrowserRouter>
  );
}

export default App;
