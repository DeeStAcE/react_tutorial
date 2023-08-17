import React, {Component} from "react";

class Box extends Component {
    state = {
        color: "green"
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                color: this.state.color === "green" ? "red" : "green"
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const style = {
            background: this.state.color,
            height: "200px",
            width: "200px"
        }
        return (
            <div style={style}/>
        )
    }
}

export default Box