import React from 'react';

function ShowUserFunc(props) {

    const handleClick = () => {
        console.log(props.name);
        console.log(props.surname);
    }

    return (
        <button onClick={handleClick}>Dane użytkownika</button>
    )

}

export default ShowUserFunc;