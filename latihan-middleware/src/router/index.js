import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../view/auth/Login";
import Register from "../view/auth/Register";
import Dashboard from "../view/Dashboard";
import Home from "../view/Home";

function Router(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
}

export default Router;
