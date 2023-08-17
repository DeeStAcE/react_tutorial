import React, {Component} from "react";

class Mortal extends Component {
    state = {
        modalOpen: false
    }

    componentDidMount() {
        this.myTimer = setTimeout(() => {
            this.setState({
                modalOpen: true
            })
        }, 5000)
    }

    render() {
        return (
            <h2>
                {this.state.modalOpen && this.props.heading}
            </h2>
        )
    }
}

export default Mortal