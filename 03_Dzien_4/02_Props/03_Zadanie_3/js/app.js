import React, {Component} from "react";
import {createRoot} from "react-dom/client";

function Sum(props) {
    let total = 0;
    return (
        <>
            <h1>{props.numbers.reduce((total, number) => total + number)}</h1>
        </>
    )
}

function App() {
    return (<Sum numbers={[1, 2, 3, 4]}/>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
