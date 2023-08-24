import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function DynamicLego() {

    const [amount, setAmount] = useState(0)
    const array = []
    for (let i = 1; i <= amount; i++) {
        array.push(i)
    }

    return (
        <>
            <form>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </form>
            <ul>
                {array.map(index => {
                    return <li key={index} style={{background: "red", height: "50px", width: `${index * 50}px`}}/>
                })}
            </ul>
        </>
    )
}

function App() {
    return <DynamicLego/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);