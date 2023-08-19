import React, {Component} from "react";
import {createRoot} from "react-dom/client";
import MathQuestionGame from "./MathQuestionGame"

function App() {
    return (
        <>
            <MathQuestionGame/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
