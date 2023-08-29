import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Notes() {

    const [textArea, setTextArea] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        setTextArea("")
    }

    return (
        <form>
            <textarea cols="30" rows="10" value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
            <button onClick={handleClick}>Wyczyść</button>
            <span>{textArea}</span>
        </form>
    )
}

function App() {
    return <Notes/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);