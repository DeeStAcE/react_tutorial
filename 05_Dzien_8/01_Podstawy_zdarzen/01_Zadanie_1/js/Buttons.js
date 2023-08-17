import React from 'react';

function Buttons() {

    function handleClick() {
        console.log('Pierwszy przycisk klinięty');
    }

    function handleClick2() {
        const numA = prompt('Liczba A:');
        const numB = prompt('Liczba B:');

        console.log(numA ** numB);

        // Math.pow(numA, numB);
    }

    function handleClick3() {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }

    return (
        <>
            <button onClick={handleClick}>Klik!</button>
            <button onClick={handleClick2}>Klik!</button>
            <button onClick={handleClick3}>Klik!</button>
        </>
    )
}

export default Buttons;