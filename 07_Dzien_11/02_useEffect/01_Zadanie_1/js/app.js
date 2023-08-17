import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function Box() {

    const [color, setColor] = useState('cornflowerblue');

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setColor('tomato');
        }, 2000);

        return () => { // componentWillUnmount
            clearTimeout(myTimer);
        }
    }, []); // [] => componentDidMount

    return (
        <div style={{width: '100px', height: '100px', background: color}}></div>
    )

}

function App() {
    return <Box/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);