import React from "react";
import {createRoot} from "react-dom/client";

const ParentComponent = (props) => {
    return (
        <>
            <ChildComponent>
                {props.children}
            </ChildComponent>
        </>
    )
}
const ChildComponent = (props) => {
    return (
        <>
            <GrandchildComponent>
                {props.children}
            </GrandchildComponent>
        </>
    )
}
const GrandchildComponent = (props) => {
    return (
        <>
            {props.children}
        </>
    )
}

function App() {
    return (
        <>
            <ParentComponent>
                <h1>To działa!</h1>
            </ParentComponent>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
