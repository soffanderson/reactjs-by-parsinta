import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { autenticated } from "../store";

function AuthRegister(props) {
    const auth = useRecoilValue(autenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.check) {
            navigate("/register");
        } else {
            navigate("/dashboard");
        }
    }, []);

    return props.children;
}

export default AuthRegister;
