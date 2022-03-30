import React, { useState } from "react"
import { Button } from 'react-bootstrap'

function SignupForm({ setCurrentUser }) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
            }),
        }).then((res) => {
            res.json().then(currentUser => {
                setCurrentUser(currentUser)
            })
        })
    }

    return (
        <div className="App">
            <form className="register-form" onSubmit={handleOnSubmit}>
                <h5 className="App">Create an account</h5>
                <h3 className="App">Signup</h3>
                <input
                    onChange={(event) => setName(event.target.value)}
                    className="form-field"
                    value={name}
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name" />
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    className="form-field"
                    value={username}
                    placeholder="username@hello.com"
                    type="text"
                    id="username"
                    name="username" />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-field"
                    value={password}
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                />
                <br />
                <Button variant="success" type="submit">Sign Up</Button>{' '}
            </form>
        </div>
    )
}

export default SignupForm