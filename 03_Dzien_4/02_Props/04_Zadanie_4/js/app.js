import React, {Component} from "react";
import {createRoot} from "react-dom/client";

function LikeBox(props) {
    return (
        <>
            <p>{props.likes} likes</p>
            <button>Like</button>
        </>
    )
}

function App() {
    return (<LikeBox likes={110}/>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
