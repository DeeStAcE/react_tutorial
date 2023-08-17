import React from "react";
import {createRoot} from "react-dom/client";

function ShopItemHeader(props) {
    return (
        <>
            <header>
                <h1>{props.title}</h1>
                <img src={props.image} alt={props.title}/>
            </header>
        </>
    )
}

function ShopItemDescription(props) {
    return (
        <>
            <article>
                <p>{props.description}</p>
            </article>
        </>
    )
}

function ShopItemPricing(props) {
    return (
        <>
            <footer>
                Cena: {props.price} zł
                <button>Kup!</button>
            </footer>
        </>
    )
}

function ShopItem(props) {
    return (
        <>
            <section>
                <ShopItemHeader title={props.title} image={props.image}/>
                <ShopItemDescription description={props.description}/>
                <ShopItemPricing price={props.price}/>
            </section>
        </>
    )
}

function App() {

    const data = {
        title: "MacBook Pro",
        image: "https://bit.ly/2EEtduD",
        description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
        price: 9999
    }
    return (
        <>
            <ShopItem {...data}/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
