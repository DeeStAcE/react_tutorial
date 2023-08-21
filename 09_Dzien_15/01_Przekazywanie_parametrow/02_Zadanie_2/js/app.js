import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Box() {
    const [boxStyle, setBoxStyle] = useState({
        width: "500px",
        height: "200px",
        backgroundColor: 'green',
    });

    const handleClick = (width, height, backgroundColor) => {
        setBoxStyle({
            width: width,
            height: height,
            backgroundColor: backgroundColor,
        })
    }

    return (
        <div style={boxStyle}>
            <button onClick={() => handleClick("200px", "300px", "orange")}>Click</button>
            <button onClick={() => handleClick("100px", "700px", "blue")}>Click</button>
            <button onClick={() => handleClick("500px", "200px", "green")}>Click</button>
        </div>
    )
}

function App() {
    return (
        <>
            <Box/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
