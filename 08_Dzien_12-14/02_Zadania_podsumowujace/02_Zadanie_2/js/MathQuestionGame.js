import React, {useState, useEffect} from "react";

function MathQuestionGame() {
    const operations = ['+', '-', '*', '/'];

    const [numA] = useState(Math.floor(Math.random() * (10 - 1) + 1));
    const [numB] = useState(Math.floor(Math.random() * (10 - 1) + 1));
    const [operation] = useState(operations[Math.floor(Math.random() * operations.length)]);

    const [answer, setAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(10);
    const [isWinner, setIsWinner] = useState(null);

    const calculateResult = () => {
        switch (operation) {
            case '+':
                return numA + numB;
            case '-':
                return numA - numB;
            case '*':
                return numA * numB;
            case '/':
                return numA / numB;
            default:
                return 0;
        }
    }

    const shuffle = (a) => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        return a;
    }

    useEffect(() => {
        const result = calculateResult();
        setAnswer(result);

        const proposedAnswers = [result];
        while (proposedAnswers.length < 4) {
            const newAnswer = Math.floor(Math.random() * (99 - 0) + 0);
            if (!proposedAnswers.includes(newAnswer)) {
                proposedAnswers.push(newAnswer);
            }
        }

        setAnswers(shuffle(proposedAnswers));

        const interval = setInterval(() => {
                setTime(time => time - 1);
            }
            , 1000);

        // componentWillUnmount
        return () => clearInterval(interval);
    }, []);

    const handleClick = (e) => {
        if (Number(e.target.innerText) === answer) {
            setIsWinner(true);
        } else {
            setIsWinner(false);
        }
    }

    return (
        <div>
            {isWinner === true ? <h1>Gratulacje</h1> : isWinner === false ? <h1>Błędna odpowiedź</h1> : null}
            {time <= 0 && isWinner === null ? <h1>Koniec czasu</h1> : null}
            <h1>{numA} {operation} {numB} =</h1>
            <div>
                {answers.map((answer, index) => {
                    return <button onClick={handleClick} disabled={time <= 0} key={index}>{answer}</button>
                })}
            </div>
            <h3>00:{time >= 0 ? time : 0}</h3>
        </div>
    )


    // ----------------------------------------------------------------------------------------------------------------
    // const [timeLeft, setTimeLeft] = useState(10)
    // const [operation, setOperation] = useState('');
    // const [num1, setNum1] = useState(0);
    // const [num2, setNum2] = useState(0);
    // const [result, setResult] = useState(0);
    // const [buttons, setButtons] = useState([]);
    // const [message, setMessage] = useState('');
    // const [gameOver, setGameOver] = useState(false);
    //
    // useEffect(() => {
    //     const arrayOfEquation = ["+", "-", "*"]
    //     const typeOfEquation = arrayOfEquation[Math.floor(Math.random() * arrayOfEquation.length)]
    //     const number1 = Math.floor(Math.random() * (10 - 1) + 1)
    //     const number2 = Math.floor(Math.random() * (10 - 1) + 1)
    //     let result = 0
    //
    //     setNum1(number1)
    //     setNum2(number2)
    //     setOperation(typeOfEquation)
    //
    //     switch (typeOfEquation) {
    //         case '+':
    //             result = number1 + number2
    //             break;
    //         case '-':
    //             result = number1 - number2
    //             break;
    //         case '*':
    //             result = number1 * number2
    //             break;
    //     }
    //
    //     setResult(result)
    //
    //     const wrongAnswers = []
    //     while (wrongAnswers.length < 3) {
    //         const randomWrongAnswer = Math.floor(Math.random() * (100 - (-9)) + (-9))
    //         if (randomWrongAnswer !== result && !wrongAnswers.includes(randomWrongAnswer)) {
    //             wrongAnswers.push(randomWrongAnswer)
    //         }
    //     }
    //
    //     const allAnswers = [...wrongAnswers, result]
    //     shuffle(allAnswers)
    //     setButtons(allAnswers)
    //
    //     const myInterval = setInterval(() => {
    //         setTimeLeft(prevTime => prevTime - 1)
    //     }, 1000)
    //
    //     return () => {
    //         clearInterval(myInterval)
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     if (timeLeft <= 0) {
    //         setGameOver(true)
    //         setMessage("Czas minął!")
    //     }
    // }, [timeLeft]);
    //
    // function shuffle(a) {
    //     for (let i = a.length; i; i--) {
    //         let j = Math.floor(Math.random() * i);
    //         [a[i - 1], a[j]] = [a[j], a[i - 1]];
    //     }
    // }
    //
    // function handleClick(value) {
    //     if (!gameOver) {
    //         if (value === result) {
    //             setMessage("Gratulacje")
    //         } else {
    //             setMessage("Błędna odpowiedź :(")
    //         }
    //         setGameOver(true)
    //     }
    // }
    //
    // return (
    //     <div>
    //         <h1>{num1} {operation} {num2} =</h1>
    //         <div>
    //             {buttons.map((value, index) => {
    //                 return (
    //                     <button key={index} onClick={() => handleClick(value)} disabled={gameOver}>
    //                         {value}
    //                     </button>
    //                 )
    //             })}
    //         </div>
    //         <h3>{gameOver ? message : `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`}</h3>
    //     </div>
    // )
}

export default MathQuestionGame