import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function BookInfo({isbn}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <>
            {
                !data && <p>Ładowanie danych...</p>
            }
            {
                data && (
                    <div>
                        <h1>{data.items[0].volumeInfo.title}</h1>
                    </div>
                )
            }
        </>
    )

}

function App() {
    return <BookInfo isbn="0747532699"/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);