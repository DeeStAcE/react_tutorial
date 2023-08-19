import React, {useState, useEffect} from "react";

function MathQuestionGame() {
    const [timeLeft, setTimeLeft] = useState(10)
    const [operation, setOperation] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [buttons, setButtons] = useState([]);
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const arrayOfEquation = ["+", "-", "*"]
        const typeOfEquation = arrayOfEquation[Math.floor(Math.random() * arrayOfEquation.length)]
        const number1 = Math.floor(Math.random() * (10 - 1) + 1)
        const number2 = Math.floor(Math.random() * (10 - 1) + 1)
        let result = 0

        setNum1(number1)
        setNum2(number2)
        setOperation(typeOfEquation)

        switch (typeOfEquation) {
            case '+':
                result = number1 + number2
                break;
            case '-':
                result = number1 - number2
                break;
            case '*':
                result = number1 * number2
                break;
        }

        setResult(result)

        const wrongAnswers = []
        while (wrongAnswers.length < 3) {
            const randomWrongAnswer = Math.floor(Math.random() * (100 - (-9)) + (-9))
            if (randomWrongAnswer !== result && !wrongAnswers.includes(randomWrongAnswer)) {
                wrongAnswers.push(randomWrongAnswer)
            }
        }

        const allAnswers = [...wrongAnswers, result]
        shuffle(allAnswers)
        setButtons(allAnswers)

        const myInterval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1)
        }, 1000)

        return () => {
            clearInterval(myInterval)
        }
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) {
            setGameOver(true)
            setMessage("Czas minął!")
        }
    }, [timeLeft]);

    function shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    function handleClick(value) {
        if (!gameOver) {
            if (value === result) {
                setMessage("Gratulacje")
            } else {
                setMessage("Błędna odpowiedź :(")
            }
            setGameOver(true)
        }
    }

    return (
        <div>
            <h1>{num1} {operation} {num2} =</h1>
            <div>
                {buttons.map((value, index) => {
                    return (
                        <button key={index} onClick={() => handleClick(value)} disabled={gameOver}>
                            {value}
                        </button>
                    )
                })}
            </div>
            <h3>{gameOver ? message : `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`}</h3>
        </div>
    )
}

export default MathQuestionGame