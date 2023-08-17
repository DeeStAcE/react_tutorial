import React from "react";
import {createRoot} from "react-dom/client";
import people from "./data/people";

const container = document.getElementById("app");
const root = createRoot(container);

const listPeople = people.map(person => {
    return <div key={person.id}>{person.name} {person.surname}</div>
})

root.render(<>{listPeople}</>);
