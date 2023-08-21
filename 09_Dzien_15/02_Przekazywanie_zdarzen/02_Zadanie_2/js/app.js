import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Shop() {

    const [list, setList] = useState([])

    const handleBuy = (title) => {
        setList([...list, title])
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={handleBuy}/>
            <ShopItem title="Dell X5500" onBuy={handleBuy}/>
            <ShopItem title="Asus NT6000" onBuy={handleBuy}/>
            <ul>
                {list.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
        </div>
    )
}

function ShopItem(props) {

    const handleBuyClick = () => {
        if (typeof props.onBuy === 'function') {
            props.onBuy(props.title)
        }
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={handleBuyClick}>Kup</button>
        </div>
    )
}

function App() {
    return (
        <>
            <Shop/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
