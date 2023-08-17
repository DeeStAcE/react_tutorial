import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function CurrencyConverter({ from, to, value, rate }) {
    return (
        <div>
            <strong>{value}</strong> {from} {"=>"} <strong>{(value * rate).toFixed(2)}</strong> {to}
        </div>
    )
}

function App() {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
            <CurrencyConverter from="NOK" to="CHF" value={300} rate={0.5} />
            <CurrencyConverter from="AUD" to="PLN" value={100} rate={6.5} />
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);