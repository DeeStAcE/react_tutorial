import React from 'react';
<<<<<<< HEAD
import {createRoot} from 'react-dom/client';
=======
import { createRoot } from 'react-dom/client';
>>>>>>> d0704dd85f9a1884cdee1d48da08e1c5bbad56bd

const container = document.querySelector('#app');
const root = createRoot(container);

// Number(x)
// x * 1
// +x
// parseFloat / parseInt(x)

const numberA = +prompt('Podaj liczbe a');
const numberB = +prompt('Podaj liczbe b');

<<<<<<< HEAD
root.render(<h1>{numberA + numberB}</h1>);
=======
root.render(<h1>{ numberA + numberB }</h1>);
>>>>>>> d0704dd85f9a1884cdee1d48da08e1c5bbad56bd
