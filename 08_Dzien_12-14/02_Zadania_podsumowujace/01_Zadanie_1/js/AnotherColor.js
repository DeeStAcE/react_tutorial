import React, {useState, useEffect} from "react";

function AnotherColor() {
    const [color, setColor] = useState("yellow")

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setColor("blue")
        }, 2000)

        return () => {
            clearTimeout(myTimer)
        }
    }, []);

    const style = {
        background: color,
        height: "200px",
        width: "200px"
    }

    return (
        <>
            <div style={style}/>
        </>
    )
}

export default AnotherColor