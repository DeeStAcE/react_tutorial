import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function WhoIsPresent() {

    const initialValue = ['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa']

    const [selectFrom, setSelectFrom] = useState(initialValue)
    const [selected, setSelected] = useState([])

    const handleChange = (e) => {
        setSelected([...selected, e.target.value])
        // const updatedSelectFrom = initialValue.filter(el => el !== e.target.value)
        const updatedSelectFrom = selectFrom.filter(el => el !== e.target.value)
        setSelectFrom(updatedSelectFrom)
    }

    return (
        <form>
            <select onChange={handleChange}>
                {selectFrom.map((el, index) => {
                    return <option key={index}>{el}</option>
                })}
            </select>
            <ul>
                {selected.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
        </form>
    )
}

function App() {
    return <WhoIsPresent/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
