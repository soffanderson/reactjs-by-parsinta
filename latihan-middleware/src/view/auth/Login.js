import React from "react";
import Autenticated from "../../middleware/Autenticated";

function Login(props) {
    return (
        <Autenticated>
            <div className="container">Login</div>
        </Autenticated>
    );
}
export default Login;
