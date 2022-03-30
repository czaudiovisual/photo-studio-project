import React, { useState } from "react"
import { Button } from 'react-bootstrap'
import SignupForm from "./SignupForm"

function LoginForm({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((res) => { res.json().then(currentUser => { setCurrentUser(currentUser)
                })
        })
    }


    return (
        <div className="body-app">
        <div className="form-outsider">
            <div className="form-container">
                    <h3 className="App">Login</h3>
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        <input
                            onChange={(event) => setUsername(event.target.value)}
                            className="form-field"
                            value={username}
                            placeholder="Username"
                            type="text"
                            id="username"
                            name="username" />
                        <input
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-field"
                            value={password}
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                        <br/>
                        <Button variant="success" size="sm" type="submit">Login</Button>{' '}
                    </form>
                    <br />
                    <br />
                    <SignupForm setCurrentUser={setCurrentUser} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm