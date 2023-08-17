import React, {Component} from "react";
import {createRoot} from "react-dom/client";

const ChatHeader = () => {
    return (
        <>
            <header>
                <h1>Chat prywatny</h1>
            </header>
        </>
    )
}

const ChatMessages = (props) => {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

const ChatMessage = () => {
    return (
        <>
            <li>Wpis z chatu 1</li>
            <li>Wpis z chatu 2</li>
            <li>Wpis z chatu 3</li>
        </>
    )
}

const NewChatMessage = () => {
    return (
        <>
            <footer>
                <form>
                    <input type="text"/>
                    <button>Wyślij</button>
                </form>
            </footer>
        </>
    )
}

function Chat(props) {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages>
                <ChatMessage/>
            </ChatMessages>
            <NewChatMessage/>
        </section>
    );
}

function App(props) {
    return <Chat/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
