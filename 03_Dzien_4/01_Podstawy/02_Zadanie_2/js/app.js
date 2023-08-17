import React, {Component} from "react";
import {createRoot} from "react-dom/client";

function LikeBox() {
    return (
        <>
            <p>100 likes</p>
            <button>Like</button>
        </>
    )
}

function App() {
    return (<LikeBox/>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
