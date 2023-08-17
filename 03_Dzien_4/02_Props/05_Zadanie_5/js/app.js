import React, {Component} from "react";
import {createRoot} from "react-dom/client";

class Menu extends Component {
    render() {
        // const {url, text} = this.props;
        return (
            <>
                <ul>
                    {this.props.menu.map(element => {
                        return <li><a href={element.url}>{element.text}</a></li>
                    })}
                </ul>
            </>
        )
    }
}

function App() {
    const menuList = [
        {
            url: "/",
            text: "Strona główna"
        },
        {
            url: "/blog",
            text: "Blog"
        },
        {
            url: "/cennik",
            text: "Cennik"
        },
        {
            url: "/kontakt",
            text: "Kontakt"
        }
    ]

    return (<Menu menu={menuList}/>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);