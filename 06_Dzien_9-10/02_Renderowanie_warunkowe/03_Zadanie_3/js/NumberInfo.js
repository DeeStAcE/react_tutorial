import React, {useState} from "react";

function NumberInfo(props) {

    // is the number a prime number
    let isPrime = true;
    for (let i = 2; i <= props.number / 2; i++) {
        if (props.number % i === 0) {
            isPrime = false
            break
        }
    }

    let isPowerTo2 = false;
    for (let i = 1; i <= props.number; i++) {
        let powerTo2 = 2 ** i;
        if (powerTo2 > props.number) {
            break;
        } else if (powerTo2 === props.number) {
            isPowerTo2 = true;
            break;
        }
    }

    return (
        <ul>
            <li>{props.number}</li>
            <li>{props.number % 2 ? "Nieparzysta" : "Parzysta"}</li>
            {isPrime && <li>"Liczba pierwsza"</li>}
            {isPowerTo2 && <li>"Potęga liczby 2"</li>}
        </ul>
    )
}

export default NumberInfo