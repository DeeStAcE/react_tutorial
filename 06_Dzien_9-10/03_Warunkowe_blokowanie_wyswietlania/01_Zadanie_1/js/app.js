import React from "react";
import {createRoot} from "react-dom/client";
import SecretStuff from "./SecretStuff"

function App() {
    return (
        <>
            <SecretStuff password="haslo" correctPassword="haslo" secret="dupa"/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
