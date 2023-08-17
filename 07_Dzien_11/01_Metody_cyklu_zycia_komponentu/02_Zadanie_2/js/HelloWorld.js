import React, {Component} from "react";

class HelloWorld extends Component {

    constructor() {
        console.log('konstruktor');

        super();
        this.state = {
            text: 'Hello World!'
        }
    }

    componentDidMount() {
        console.log('komponent zamontowany');

        this.myTimer = setTimeout(() => {
            this.setState({
                text: 'Hi, Everyone!'
            });
        }, 5000);
    }

    render() {
        console.log('komponent wyrenderowany');

        return (
            <h1>{this.state.text}</h1>
        )
    }

    componentWillUnmount() {
        console.log('komponent odmontowywany');
        clearTimeout(this.myTimer);
    }

}

export default HelloWorld