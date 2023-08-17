import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const imageUrl = "https://fer-api.coderslab.pl/assets/pexels-photo-4974914.jpeg";

root.render(<img src={imageUrl} alt="image"/>);
