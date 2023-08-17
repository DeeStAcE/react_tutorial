import React, {Component} from "react";

class StrobeLight extends Component {
    state = {
        color: "white"
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                color: this.state.color === "white" ? this.props.color : "white"
            })
        }, this.props.frequency)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const style = {
            width: "500px",
            height: "500px",
            background: this.state.color
        }

        return (
            <div style={style}/>
        )
    }
}

export default StrobeLight