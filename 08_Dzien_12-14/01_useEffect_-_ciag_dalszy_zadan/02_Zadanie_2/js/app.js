import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";

function SpeedClickGame(props) {
    const [time, setTime] = useState(props.time)
    const [points, setPoints] = useState(0)
    const [newTime, setNewTime] = useState(props.time - 50)
    const [buttonDisabled, setButtonDisabled] = useState(false);

    function handleClick() {
        if (time > 0) {
            setPoints(prevPoints => prevPoints + 1)
            setNewTime(newTime - 50)
            setTime(newTime)
        }
    }

    useEffect(() => {
        const myInterval = setInterval(() => {
            setTime(prevTime => prevTime - 50)
        }, 50)

        return () => {
            clearInterval(myInterval)
        }
    }, []);

    useEffect(() => {
        if (time <= 0) {
            setButtonDisabled(true)
            setTime(0)
        }
    }, [time]);

    return (
        <div>
            <button onClick={handleClick} disabled={buttonDisabled}>Click me!</button>
            <h1>Time left: {time}</h1>
            <h2>Your points: {points}</h2>
        </div>
    )
}

function App() {
    return (
        <>
            <SpeedClickGame time="2000"/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
