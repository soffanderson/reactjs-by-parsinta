import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    </React.StrictMode>
);
