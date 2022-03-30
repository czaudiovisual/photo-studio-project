import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import SignupForm from "./SignupForm"

function LoginForm({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const history = useHistory();


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
        }).then((res) => {
            if (res.ok) {
                res.json().then(currentUser => {
                    setCurrentUser(currentUser)
                    history.push('/')
                })
            } else {
                res.json().then((error => setError(error.error)))
            }
        })
    }

    return (
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container">
                    <h3 className="App">Login</h3>
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        {error ?
                            <Alert variant="danger">{error}</Alert> : <Alert variant="danger="></Alert>
                        }
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