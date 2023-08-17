import React, { Component } from "react";
import { createRoot } from "react-dom/client";

// function Search() {
//   return (
//     <div>
//       <input />
//       <button>Wyszukaj</button>
//     </div>
//   )
// }

class Search extends Component {
    render() {
        return (
            <div>
                <input />
                <button>Wyszukaj</button>
            </div>
        )
    }
}

function App() {
    return (
        <Search />
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
