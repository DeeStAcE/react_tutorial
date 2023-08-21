import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function ButtonCounter() {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick onClick={setCounter}/>
            <ButtonToClick onClick={setCounter}/>
        </div>
    )
}

// onSetCounter
function ButtonToClick({onClick}) {

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick(prev => prev + 1);
        }
    }

    return <button onClick={handleClick}>Click</button>

}

function App() {
    return <ButtonCounter/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);