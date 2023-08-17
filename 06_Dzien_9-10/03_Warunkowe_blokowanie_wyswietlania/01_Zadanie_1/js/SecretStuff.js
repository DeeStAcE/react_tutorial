import React, {useState} from "react";

function SecretStuff(props) {
    if (props.password !== props.correctPassword) {
        return null
    } else {
        return (
            <h2>{props.secret}</h2>
        )
    }
}

export default SecretStuff