import React, {Component} from "react";

class RandomNumbers extends Component {

    state = {
        numbers: [],
    }

    handleClick = () => {
        const randomNumber = Math.floor(Math.random() * (999 - 100) + 100);
        this.setState({
            numbers: [...this.state.numbers, randomNumber],
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Wylosuj liczbę</button>
                <ul>
                    {this.state.numbers.map((number, index) => {
                        return <li key={index}>{number}</li>
                    })}
                </ul>
            </>
        )
    }

}

export default RandomNumbers