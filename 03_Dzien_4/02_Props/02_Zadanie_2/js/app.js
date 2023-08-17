import React, { Component } from "react";
import { createRoot } from "react-dom/client";

// function AddNumber({ numberA, numberB }) {
//   return <h1>{numberA + numberB}</h1>;
// }

class AddNumber extends Component {
    render() {
        const { numberA, numberB } = this.props;

        return <h1>{numberA + numberB}</h1>;
    }
}

function App() {
    return <AddNumber numberA={10} numberB={20} />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);