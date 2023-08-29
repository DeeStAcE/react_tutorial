import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

import CarsManager from './CarsManager';
import AddCar from "./AddCar"

function App() {
    return (
        <>
            <AddCar/>
            <CarsManager/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);