import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function PropsToState(props) {
    const [stateText, setStateText] = useState(props.text)

    useEffect(() => {
        const myInterval = setInterval(() => {
            setStateText(prevText => prevText + ".")
        }, 1000)

        return () => {
            clearInterval(myInterval)
        }
    }, []);

    return (
        <>
            <ShowInfo info={stateText}/>
        </>
    )
}

function ShowInfo(props) {

    return (
        <h1>{props.info}</h1>
    )
}

function App() {
    return (
        <>
            <PropsToState text="Witam"/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
