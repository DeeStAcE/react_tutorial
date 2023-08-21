import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Bulb() {

    const [isBulbOn, setBulbOn] = useState(false);

    return (
        <div style={{width: '100px', height: '100px', background: isBulbOn ? 'yellow' : 'white'}}>
            <button onClick={() => setBulbOn(!isBulbOn)}>{isBulbOn ? 'Off' : 'On'}</button>
        </div>
    )
}

function App() {
    return <Bulb/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);