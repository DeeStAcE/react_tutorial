import React, {Component} from "react";
import {createRoot} from "react-dom/client";

function Header(props) {
    const {logo, searchPlaceholder} = props;

    return (
        <header>
            <a href="#">{logo}</a>
            <form>
                <input placeholder={searchPlaceholder} name="s"/>
                <button>Search</button>
            </form>
        </header>
    );
}

function App() {
    return <Header logo="Your company!" searchPlaceholder="Type some words..."/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
