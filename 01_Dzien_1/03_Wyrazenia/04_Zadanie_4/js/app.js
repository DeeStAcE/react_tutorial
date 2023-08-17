import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.querySelector('#app');
const root = createRoot(container);

// Number(x)
// x * 1
// +x
// parseFloat / parseInt(x)

const numberA = prompt('Podaj liczbe a');
const symbol = prompt('Podaj znak równania')
const numberB = prompt('Podaj liczbe b');

function calculate() {
    switch (symbol) {
        case '+':
            return parseFloat(numberA) + parseFloat(numberB);
        case '-':
            return parseFloat(numberA) - parseFloat(numberB);
        case '*':
            return parseFloat(numberA) * parseFloat(numberB);
        case '/':
            return parseFloat(numberA) / parseFloat(numberB);
    }
}

root.render(<div>{calculate()}</div>)