import React, {useEffect, useState} from "react";
import ClockTime from "./ClockTime"
import ClockDate from "./ClockDate"

function Clock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const myInterval = setInterval(() => {
            setDate(new Date())
        })

        return () => {
            clearInterval(myInterval)
        }
    }, []);

    return (
        <>
            <ClockTime date={date}/>
            <ClockDate date={date}/>
        </>
    )
}

export default Clock