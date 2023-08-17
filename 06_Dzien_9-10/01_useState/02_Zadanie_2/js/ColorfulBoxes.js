import React, {useState} from "react";

function ColorfulBoxes() {
    const [counter, setCounter] = useState([])

    const handleClick = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setCounter([...counter, randomColor])
    }

    return (
        <>
            <button onClick={handleClick}>Dodaj Boxa!</button>
            <ul>
                {counter.map(element => {
                    return (
                        <div style={{backgroundColor: element, height: "200px", width: "200px"}}/>
                    )
                })}
            </ul>
        </>
    )
}

export default ColorfulBoxes