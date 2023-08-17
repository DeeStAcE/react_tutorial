import React, {useState} from "react";

function ToDoList() {
    const [array, setArray] = useState([])

    const handleClick = () => {
        const arrayLength = array.length + 1;
        const toDoElement = `Zadnie ${arrayLength}`
        setArray([...array, toDoElement])
    }

    return (
        <>
            <button onClick={handleClick}>Dodaj zadanie</button>
            <ul>
                {array.map(element => <li>{element}</li>)}
            </ul>
        </>
    )
}

export default ToDoList