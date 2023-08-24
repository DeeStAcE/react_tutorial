import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function AdultStuff() {

    const [age, setAge] = useState(null)

    return (
        <form>
            <input type="number" placeholder="Podaj wiek" value={age} onChange={(e) => setAge(e.target.value)}/>
            <AdultStuffBox age={age}/>
        </form>
    )
}

function AdultStuffBox(props) {
    return (
        <>
            {props.age >= 18 ? "Lorem ipsum, treść dla pełnoletnich." : null}
        </>
    )
}

function App() {
    return <AdultStuff/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);