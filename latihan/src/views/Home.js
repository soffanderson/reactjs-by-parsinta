import React from "react";
import AuthenticationUser from "../components/AuthenticationUser";
import { UserProvider } from "../context/User";

function Home(props) {
    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                    <div className="me-1">My name is : </div>
                    <AuthenticationUser />
                </div>
            </UserProvider>
        </div>
    );
}

export default Home;
