import React, {useState} from "react";

function Numbers() {
    const originalArray = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    const [array, setArray] = useState(originalArray)


    const handleParzyste = () => {
        const newArray = originalArray.filter(number => number % 2 === 0)
        setArray(newArray)
    }

    const handleNieparzyste = () => {
        const newArray = originalArray.filter(number => number % 2 !== 0)
        setArray(newArray)
    }

    const handleWszystkie = () => {
        setArray(originalArray)
    }

    return (
        <>
            <button onClick={handleWszystkie}>Pokaż wszystkie</button>
            <button onClick={handleParzyste}>Pokaż parzyste</button>
            <button onClick={handleNieparzyste}>Pokaż nieparzyste</button>
            <ul>
                {array.map((number, index) => {
                    return <li key={index}>{number}</li>
                })}
            </ul>
        </>
    )
}

export default Numbers