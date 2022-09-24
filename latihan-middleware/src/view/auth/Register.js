import React from "react";
import AuthRegister from "../../middleware/AuthRegister";

function Register(props) {
    return (
        <AuthRegister>
            <div className="container">Register</div>;
        </AuthRegister>
    );
}
export default Register;
