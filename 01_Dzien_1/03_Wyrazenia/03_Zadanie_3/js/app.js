import React from "react";
import { createRoot } from "react-dom/client";

import person from './data/person';

const container = document.getElementById("app");
const root = createRoot(container);

const { title, firstName, lastName, age } = person;

root.render(
    <ul>
        <li>{title}</li>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{age}</li>
    </ul>
);