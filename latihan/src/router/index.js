import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import UsersIndex from "../views/users/Index.js";
import UserShow from "../views/users/Show.js";
import NotFoundPage from "../views/errors/NotFoundPage";

function Router(props) {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="users" element={<UsersIndex />} />
                <Route path="users/:identifier" element={<UserShow />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default Router;
