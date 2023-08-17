import React from "react";

function HoverEvent() {

    function handleFocus(e) {
        e.preventDefault()

        console.log('Najechano na przycisk')
    }

    return (
        <button onMouseEnter={handleFocus}>Button</button>
    )
}

export default HoverEvent;