import React from "react";

function EventsTest() {

    function handleClick() {
        console.log("Clicked")
    }

    function handleMouseEnter() {
        console.log("Mouse Enter")
    }

    function handleMouseLeave() {
        console.log("Mouse Leave")
    }

    const divStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: "red"
    }

    return (
        <div style={divStyle} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    )
}

export default EventsTest;