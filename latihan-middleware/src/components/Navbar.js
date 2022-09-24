import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { autenticated } from "../store";

function Navbar(props) {
    const auth = useRecoilValue(autenticated);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 mb-2">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Navbar
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    className="nav-link"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {auth.check && (
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                        {auth.check ? (
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        {auth.user.name}
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
