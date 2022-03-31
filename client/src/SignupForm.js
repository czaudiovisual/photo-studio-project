import React, { useState } from "react"
import { Button, Alert } from 'react-bootstrap'

function SignupForm({ setCurrentUser }) {
    const [name, setName] = useState("")
    const [photo_style, setPhotoStyle] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const displayError = () => {
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    function handleOnSubmit(event) {
        event.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                photo_style: photo_style,
                username: username,
                password: password,
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then(currentUser => {
                    setCurrentUser(currentUser)
                })
            } else {
                res.json().then((errors => setErrors(errors.errors)))
            }
        })
    }

    return (
        <div className="App">
            <form className="register-form" onSubmit={handleOnSubmit}>
                <h5 className="App">Create an account</h5>
                <h3 className="App">Signup</h3>
                {errors ?
                    <Alert className="App" variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                }
                <input
                    onChange={(event) => setName(event.target.value)}
                    className="form-field"
                    value={name}
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name" />
                <input
                    onChange={(event) => setPhotoStyle(event.target.value)}
                    className="form-field"
                    value={photo_style}
                    placeholder="Photo Style"
                    type="text"
                    id="photo_style"
                    name="photo_Style" />
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