import React from "react";
import {createRoot} from "react-dom/client";
import products from "./data/products"

function ReceiptHeader(props) {
    return (
        <thead>
        <tr>
            { props.children }
        </tr>
        </thead>
    )
}

function ReceiptItems(props) {
    return (
        <tbody>
        { props.children }
        </tbody>
    )
}

function ReceiptItem(props) {
    return (
        <tr>
            { props.children }
        </tr>
    )
}

function ReceiptFooter(props) {
    return (
        <tfoot>
        <tr>
            { props.children }
        </tr>
        </tfoot>
    )
}

function Receipt() {
    return (
        <table className="table">
            <ReceiptHeader>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilość</th>
                <th>Łączna cena</th>
            </ReceiptHeader>
            <ReceiptItems>
                { products.map(product => {
                    return (
                        <ReceiptItem>
                            <td>{product.name}</td>
                            <td>{product.single_price}</td>
                            <td>{product.qty}</td>
                            <td>{(product.single_price * product.qty).toFixed(2)} zł</td>
                        </ReceiptItem>
                    )
                })}
            </ReceiptItems>
            <ReceiptFooter>
                <td>RAZEM</td>
                <td>-</td>
                <td>-</td>
                <td>{ (products.reduce((prev, next) => prev + (next.single_price * next.qty), 0)).toFixed(2) } zł</td>
            </ReceiptFooter>
        </table>
    )
}

function App() {
    return <Receipt />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
