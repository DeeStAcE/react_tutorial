import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function CustomTitle() {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = `Kliknięto mnie już ${counter} razy`;
    }, [counter]);

    return (
        <p onClick={() => setCounter(p => p + 1)} style={{fontSize: `${counter * 1.2}rem`}}>Kliknięto mnie
            już: {counter} razy</p>
    )

}

function App() {
    return <CustomTitle/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);