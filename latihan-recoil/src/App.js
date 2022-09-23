import React from "react";
import Router from "./router";
import Navbar from "./components/Navbar";
import { useRecoilState } from "recoil";
import { theme } from "./store";

function App(props) {
    const [currentTheme, setTheme] = useRecoilState(theme);
    const defaultTheme =
        currentTheme === "dark" ? "bg-dark text-white" : "bg-white text-dark";

    return (
        <div className={`${defaultTheme} vh-100`}>
            <Navbar />
            <div className="py-4">
                <Router />
            </div>
        </div>
    );
}

export default App;
