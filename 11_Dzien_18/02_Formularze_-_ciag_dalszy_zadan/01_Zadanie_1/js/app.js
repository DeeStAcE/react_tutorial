import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function PESELInput() {

    const [pesel, setPesel] = useState("")
    let isPesel = null


    isPesel = pesel.length === 11 && /^[0-9]+$/.test(pesel);

    return (
        <form>
            <input type="text" value={pesel} onChange={(e) => setPesel(e.target.value)}/>
            <div>
                {isPesel ? (<input type="submit" value="Prześlij"/>) : ("Niepoprawny numer pesel")}
            </div>
        </form>
    )
}

function App() {
    return <PESELInput/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);