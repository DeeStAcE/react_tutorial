import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#app');
const root = createRoot(container);

const birthYear = prompt('Podaj swoj rok urodzenia');

root.render(<h1>{ new Date().getFullYear() - birthYear}</h1>);