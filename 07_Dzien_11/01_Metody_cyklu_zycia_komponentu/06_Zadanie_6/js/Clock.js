import React, {Component} from "react";
import ClockTime from "./ClockTime"
import ClockDate from "./ClockDate"

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <>
                <ClockTime date={this.state.date}/>
                <ClockDate date={this.state.date}/>
            </>
        )
    }
}

export default Clock