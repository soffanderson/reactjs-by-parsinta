import React from "react";
import { useRecoilState } from "recoil";
import { theme } from "../store";

function Home(props) {
    const [currentTheme, setTheme] = useRecoilState(theme);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <select
                        className="form-control"
                        value={currentTheme}
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        <option value="dark">Dark</option>
                        <option value="white">White</option>
                    </select>
                </div>
            </div>
            <div className="mt-2">
                You're selecting the {currentTheme} theme.
            </div>
        </div>
    );
}

export default Home;
