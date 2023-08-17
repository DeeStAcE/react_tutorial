import React from "react";
import {createRoot} from "react-dom/client";
import people from "./data/people";

const container = document.getElementById("app");
const root = createRoot(container);

const peopleList = people.map(person => {
    return [
        <div key={person.id} className='person'>
            <img src={person.avatar} alt="avatar"/>
            <div className='info'>
                <h1>{person.title} {person.name} {person.surname}</h1>
                <p>{person.bio}</p>
            </div>
        </div>
    ]
})

root.render(<>{peopleList}</>);
