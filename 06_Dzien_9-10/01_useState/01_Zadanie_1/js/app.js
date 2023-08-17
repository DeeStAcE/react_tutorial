import React from "react";
import {createRoot} from "react-dom/client";
import Counter from "./Counter"

function App() {
    return (
        <>
            <Counter/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
