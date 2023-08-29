import React from "react";
import {createRoot} from "react-dom/client";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet, useParams
} from 'react-router-dom';

const Main = () => {
    const activeStyle = {
        border: "2px solid green"
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink end style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink end style={({isActive}) => isActive ? activeStyle : undefined}
                             to="/hello/Jan">Blog</NavLink>
                </li>
                <li>
                    <NavLink end style={({isActive}) => isActive ? activeStyle : undefined}
                             to="/checkage/50">Pricing</NavLink>
                </li>
            </ul>
        </div>
    )
}

const Home = () => {
    return <h1>Witaj na stronie</h1>
}

const HelloYou = () => {
    const {name} = useParams()
    return <h1>Witaj {name}</h1>
}

const CheckAge = () => {
    const {age} = useParams()
    return <h1>{parseInt(age) >= 18 ? "Pełnoletni" : "Niepełnoletni"}</h1>
}

function App() {
    return (
        <HashRouter>
            <Main/>
            <Outlet/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hello/:name" element={<HelloYou/>}/>
                <Route path="/checkage/:age" element={<CheckAge/>}/>
            </Routes>
        </HashRouter>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
