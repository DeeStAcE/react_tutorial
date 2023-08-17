import React, {useState} from "react";

function UpperLower() {
    const [text, setText] = useState("Example text")

    const handleUppercase = () => {
        setText(text.toUpperCase())
    }

    const handleLowercase = () => {
        setText(text.toLowerCase())
    }

    return (
        <>
            <h2>{text}</h2>
            <button onClick={handleUppercase}>Uppercase</button>
            <button onClick={handleLowercase}>Lowercase</button>
        </>
    )
}

export default UpperLower