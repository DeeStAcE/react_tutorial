import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function Holidays() {

    const [holidays, setHolidays] = useState([]);
    const apiKey = 'e92601251-c0a2-4s63-v73f-54041195480f';
    const country = "PL"

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fer-api.coderslab.pl/v1/holidays?key=${apiKey}&country=${country}`);
            const data = await response.json();

            console.log(data)
            setHolidays(data.holidays);
        };

        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {holidays.map((holiday, index) => (
                    <li key={index}>
                        <h3>{holiday.name}</h3>
                        <div>{holiday.date}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function App() {
    return <Holidays/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
