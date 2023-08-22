import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import FakeAPI from "./data/fakeAPI";


function Form() {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUser, setLoggedInUser] = useState(null)

    const handleValidation = (e) => {
        if (login.length <= 2) {
            e.preventDefault()
            return alert("Login must be at least 3 letters long")
        } else if (password.length <= 4) {
            e.preventDefault()
            return alert("Password must be at least 5 letters long")
        } else {
            FakeAPI.login({
                username: login,
                password: password
            }).then(user => {
                setLoggedInUser(user)
            }).catch(err => {
                return alert(err)
            })

        }
    }

    return (
        <>
            {loggedInUser ? (
                <h2>Hello {loggedInUser.name} {loggedInUser.surname}</h2>
            ) : (
                <form>
                    <label>Login
                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    </label>
                    <label>Hasło
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <input type="submit" value="Zaloguj" onClick={handleValidation}/>
                </form>
            )}

        </>
    )
}

function App() {
    return <Form/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);