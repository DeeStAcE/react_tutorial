import React from 'react';
import {useInput} from './hooks/useInput';

export default function InteractiveDiv() {

    const [inputValue, inputHandler] = useInput(0);

    return (
        <div>
            <input type="number" {...inputHandler} />
            <div style={{height: '100px', width: `${inputValue}px`, background: 'red'}}></div>
        </div>
    )
}