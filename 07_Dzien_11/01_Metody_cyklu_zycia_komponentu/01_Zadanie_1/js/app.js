import React, {useState, Component} from "react";
import {createRoot} from "react-dom/client";

class LifeCyclesTester extends Component {

    // this.state = {

    // }

    // Faza montowania
    constructor(props) {
        console.log('constructor');

        super(props);
        this.state = {
            counter: 0,
        }
    }

    // *
    componentDidMount() {
        console.log('component did mount');

        this.myInterval = setInterval(() => {
            this.setState(prev => {
                return {
                    counter: prev.counter + 1,
                }
            });
        }, 2000);

        // timer, interval, fetch, modyfikacja DOM
    }

    // Faza aktualizacji
    // static getDerivedStateFromProps(props, state) {
    //   console.log('get derived state from props');
    //   return null;
    // }
    // https://legacy.reactjs.org/docs/react-component.html#static-getderivedstatefromprops

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should component update');

        if (nextState.counter % 2 === 0) {
            return false;
        }

        return true;
    }

    // *
    render() {
        console.log('render');

        return (
            <>
                <p>Licznik: {this.state.counter}</p>
                <button onClick={() => this.setState(prev => ({counter: prev.counter + 1}))}>Zwiększ licznik</button>
            </>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
    }

    // Faza odmontowywania

    // *
    componentWillUnmount() {
        console.log('component will unmount');

        clearInterval(this.myInterval);

        // clear(timer/interval), disconnect
    }

}

function App() {

    const [isLifeCyclesTesterVisible, setVisibility] = useState(true);

    return (
        <>
            {isLifeCyclesTesterVisible && <LifeCyclesTester/>}
            <button onClick={() => setVisibility(prev => !prev)}>Pokaż / ukryj</button>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);