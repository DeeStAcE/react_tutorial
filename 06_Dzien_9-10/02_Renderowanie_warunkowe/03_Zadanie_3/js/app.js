import React from "react";
import {createRoot} from "react-dom/client";
import NumberInfo from "./NumberInfo"

function App() {
    return (
        <>
            <NumberInfo number={2}/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
