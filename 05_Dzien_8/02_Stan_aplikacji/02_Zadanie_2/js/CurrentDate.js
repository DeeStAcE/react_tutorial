import React, {Component} from 'react';

class CurrentDate extends Component {

    state = {
        date: new Date(),
    }

    handleClick = () => {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()},
                    {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</h1>
                <button onClick={this.handleClick}>Zaktualizuj datę</button>
            </>
        )
    }
}

export default CurrentDate