import React from "react";
import {createRoot} from "react-dom/client";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>Aplikacja React z React Router</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
            </ul>
        </div>
    )
}

const Home = () => {
    return <h1>Witaj na stronie</h1>
}

const Blog = () => {
    return <h1>Blog</h1>
}

const Pricing = () => {
    return <h1>Cennik</h1>
}

function App() {
    return (
            <HashRouter>
                <Main/>
                <Outlet/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                </Routes>
            </HashRouter>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
