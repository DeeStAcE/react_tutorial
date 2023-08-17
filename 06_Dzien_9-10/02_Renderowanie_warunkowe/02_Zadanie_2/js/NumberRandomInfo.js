import React, {useState} from 'react';

function NumberRandomInfo() {

    const [number, setNumber] = useState(0);

    setInterval(() => {
        setNumber(Math.ceil(Math.random() * 5));
    }, 3000);

    return (
        <>
            <p>{number >= 3 ? `${number} Wieksza lub rowna 3` : `${number} Mniejsza od 3`}</p>
        </>
    )

}


export default NumberRandomInfo;