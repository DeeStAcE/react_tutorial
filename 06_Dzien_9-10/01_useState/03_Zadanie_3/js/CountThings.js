import React, {useState} from "react";

function CountThings() {
    const [bankAmount, setBankAmount] = useState(10000)
    const [userAge, setUserAge] = useState(18)

    const handleGetRich = () => {
        setBankAmount(bankAmount + 1000)
    }

    const handleGetOlder = () => {
        setUserAge(userAge + 1)
    }

    return (
        <div>
            <p>💰 so much money: {bankAmount}</p>
            <p>Age: {userAge}</p>
            <button onClick={handleGetRich}>Get rich!</button>
            <button onClick={handleGetOlder}>Get older! :(</button>
        </div>
    )
}

export default CountThings