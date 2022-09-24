import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { autenticated } from "../store";

function Autenticated(props) {
    const auth = useRecoilValue(autenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.check) {
            navigate("/login");
        } else {
            navigate("/dashboard");
        }
    }, []);

    return props.children;
}

export default Autenticated;
