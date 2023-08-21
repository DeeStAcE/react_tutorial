import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function CrazyDiv() {

    const [divStyle, setDivStyle] = useState({
        left: "0px",
        top: "0px"
    })

    const handleHover = (min, max) => {
        const ranNum1 = Math.floor(Math.random() * (max - min) + min)
        const ranNum2 = Math.floor(Math.random() * (max - min) + min)

        setDivStyle({
            left: `${ranNum1}px`,
            top: `${ranNum2}px`
        })
    }

    const style = {
        background: "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        left: divStyle.left,
        top: divStyle.top
    }

    return (
        <div style={style} onMouseEnter={() => handleHover(0, 1000)}/>
    )
}

function App() {
    return (
        <>
            <CrazyDiv/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
