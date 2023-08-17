import React, {Component} from 'react';

class TextTyper extends Component {

    state = {
        text: this.props.text.slice(0, 1),
        index: 1,
    }

    handlePlus = () => {
        if (this.state.index === this.props.text.length) {
            return;
        }

        this.setState({
            text: this.props.text.slice(0, this.state.index + 1),
            index: this.state.index + 1,
        });
    }

    handleMinus = () => {
        if (this.state.index === 0) {
            return;
        }

        this.setState({
            text: this.props.text.slice(0, this.state.index - 1),
            index: this.state.index - 1,
        });
    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </>
        )
    }

}

export default TextTyper;