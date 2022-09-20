import React from "react";
import { useRecoilState } from "recoil";
import { theme } from "../store";

function Home(props) {
    const [currentTheme, setTheme] = useRecoilState(theme);

    return (
        <div className="container">
            You're selecting the {currentTheme} theme!
        </div>
    );
}

export default Home;
