import React, {Component} from "react";

class MagicBox extends Component {

    state = {
        color: "#000",
    }

    handleMouseEnter = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.setState({
            color: randomColor,
        })
        // console.log(randomColor)
        // console.log(this.state.color)
    }

    render() {
        const divStyle = {
            height: "200px",
            width: "200px",
            backgroundColor: this.state.color
        }

        return (
            <div style={divStyle} onMouseEnter={this.handleMouseEnter}/>
        )
    }
}

export default MagicBox