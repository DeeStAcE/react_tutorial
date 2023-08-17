import React from "react";
import {createRoot} from "react-dom/client";
import StrobeLight from "./StrobeLight";

const App = () => {
    return (
        <>
            <StrobeLight color="red" frequency="1000"/>
            <StrobeLight color="green" frequency="2000"/>
            <StrobeLight color="black" frequency="3000"/>
            <StrobeLight color="gray" frequency="4000"/>
        </>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
