import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json();

            // console.log(data);
            setData(data);
        })();
    }, []);


    return (
        <>
            {
                !data && <p>Loading...</p>
            }
            {
                data && (
                    <ul className="list">
                        {
                            data.results.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)
                        }
                    </ul>
                )
            }
        </>
    )

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);