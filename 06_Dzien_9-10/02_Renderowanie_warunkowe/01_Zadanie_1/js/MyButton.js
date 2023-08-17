import React, {useState} from "react";

function MyButton() {
    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    return (
        <>
            <button onClick={handleClick}>{state ? "TAK" : "NIE"}</button>
        </>
    )
}

export default MyButton