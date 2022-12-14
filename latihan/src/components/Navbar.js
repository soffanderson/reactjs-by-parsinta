import React from "react";
import { NavLink } from "react-router-dom";
import { UserProvider } from "../context/User";
import AuthenticationUser from "./AuthenticationUser";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        Soffan
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    className="nav-link "
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    className="nav-link "
                                    to="/users"
                                >
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    className="nav-link "
                                    to="/"
                                >
                                    <UserProvider>
                                        <div className="d-flex">
                                            <div className="me-1">Hello, </div>
                                            <AuthenticationUser />
                                        </div>
                                    </UserProvider>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
