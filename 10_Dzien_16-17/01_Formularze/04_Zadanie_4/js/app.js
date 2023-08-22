import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function ToDoList() {

    const [toDoArray, setArray] = useState([])
    const [newItem, setNewItem] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        const newToDoItem = {
            id: toDoArray.length ,
            name: newItem,
            done: false
        }
        setArray([...toDoArray, newToDoItem])
        setNewItem("")
    }

    const handleItemClick = (id) => {
        const updatedToDoArray = toDoArray.map(item => {
            return item.id === id ? {...item, done: !item.done} : item
        })
        setArray(updatedToDoArray)
    }

    return (
        <div className="toDoList">
            <form className="header">
                <h2>Twoja lista zadań</h2>
                <input type="text" placeholder="np. Zrobić zakupy" value={newItem}
                       onChange={(e) => setNewItem(e.target.value)}/>
                <button className="btn-add" onClick={handleClick}>Dodaj</button>
            </form>

            <ul>
                {toDoArray.map(el => {
                    return <li onClick={() => handleItemClick(el.id)} key={el.id}
                               className={el.done ? "done" : ""}>{el.name}</li>
                })}
            </ul>
        </div>

    )
}

function App() {
    return <ToDoList/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);