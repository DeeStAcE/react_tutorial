import React from "react";
import {createRoot} from "react-dom/client";
import Userinfo from "./UserInfo"

function App() {
    return (
        <>
            <Userinfo/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
