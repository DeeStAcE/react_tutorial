import React from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const userColor = prompt('Choose a color: [red, green, blue]');
const availableColors = ['red', 'green', 'blue'];

function checkAnswer() {
    if (availableColors.indexOf(userColor) === -1) {
        return <div>Wrong color</div>
    } else {
        const style = {
            width: '100px',
            height: '100px',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: userColor
        }

        return <div style={style}></div>
    }
}

root.render(checkAnswer());
