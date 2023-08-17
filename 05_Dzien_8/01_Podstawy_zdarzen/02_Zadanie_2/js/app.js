import React from "react";
import { createRoot } from "react-dom/client";

import ShowUserFunc from './ShowUserFunc';
import ShowUserClass from './ShowUserClass';

function App() {
    return (
        <>
            <ShowUserFunc name="Jan" surname="Kowalski" />
            <ShowUserClass name="Krzysztof" surname="Nowak" />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);