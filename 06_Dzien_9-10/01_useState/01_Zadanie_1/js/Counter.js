import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(10)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(10)
    }

    return (
        <>
            <h2>Liczba kliknięć {counter}</h2>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter