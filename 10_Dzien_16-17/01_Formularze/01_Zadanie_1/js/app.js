import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Hello() {

    const [name, setName] = useState("You")

    return (
        <form>
            <h1>Hello {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    )
}

function App() {
    return <Hello/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);