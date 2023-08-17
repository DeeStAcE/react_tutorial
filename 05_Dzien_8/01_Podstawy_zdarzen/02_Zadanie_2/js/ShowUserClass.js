import React, { Component } from 'react';

class ShowUserClass extends Component {

    // handleClick() {
    //   console.log(this.props.name);
    //   console.log(this.props.surname);
    // }

    handleClick = () => {
        console.log(this.props.name);
        console.log(this.props.surname);
    }

    render() {
        return (
            // <button onClick={this.handleClick.bind(this)}>Dane użytkownika</button>
            // <button onClick={() => this.handleClick()}>Dane użytkownika</button>
            <button onClick={this.handleClick}>Dane użytkownika</button>
        )
    }
}

export default ShowUserClass;