import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function SelectOrType(props) {

    const [last, setLast] = useState("Inne")
    const [isLastSelected, setIsLastSelected] = useState(false)
    const [newLast, setNewLast] = useState("")

    const handleChange = (e) => {
        if (e.target.value === last) {
            setIsLastSelected(true)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        setNewLast(last)
        setIsLastSelected(false)
    }

    return (
        <form>
            <select onChange={handleChange}>
                {props.items.map(item => <option value={item}>{item}</option>)}
                <option value={newLast ? newLast : "Inne"}>{newLast ? newLast : "Inne"}</option>
            </select>
            <div hidden={!isLastSelected}>
                <input type="text" value={last} onChange={(e) => setLast(e.target.value)}/>
                <button onClick={handleClick}>Zmień</button>
            </div>
        </form>
    )
}

function App() {
    return <SelectOrType items={["BMW", "Jaguar", "Porsche"]}/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);