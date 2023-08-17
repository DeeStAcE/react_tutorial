import React from "react";
import {createRoot} from "react-dom/client";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

const container = document.getElementById("app");
const root = createRoot(container);


const numA = genNumber();
const numB = genNumber();
const userNum = +prompt(`Podaj sumę liczb: ${numA} i ${numB}`)

function checkAnswer() {
  if (numA + numB === userNum) {
      const style = {backgroundColor: 'green'}
      return <div style={style}>Odpowiedź poprawna</div>
  } else {
      const style = {backgroundColor: 'red'}
      return <div style={style}>Odpowiedź błędna</div>
  }
}

root.render(checkAnswer());
