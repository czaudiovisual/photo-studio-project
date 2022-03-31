
import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { Button } from 'react-bootstrap'

function ClientForm({ currentUser, addClient }) {
    const [client_name, setClientName] = useState("")
    const [number, setNumber] = useState("")
    const [img_url, setImgUrl] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleOnSubmit(event) {
        event.preventDefault()
        setClientName("")
        setNumber("")
        setImgUrl("")
        setEmail("")
        fetch("/clients", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_name,
                number,
                img_url,
                email,
                user_id: currentUser.id
            }),
        }).then(res => res.json())
            .then(client => {
                addClient(client)
                setSubmitted(true)
            })
    }

    return (
        <div>
            <br />
            <br />
            <h1>Add Client</h1>
            <br />
            {submitted ? <Redirect to="/" /> :
                <div>
                    <div className="form-outsider">
                        <div className="form-container">
                            <form className="register-form" onSubmit={handleOnSubmit}>
                                <input
                                    onChange={(event) => setClientName(event.target.value)}
                                    className="form-field"
                                    value={client_name}
                                    placeholder="Client Name"
                                    type="text"
                                    id="client_name"
                                    name="client_name" />
                                <input
                                    onChange={(event) => setNumber(event.target.value)}
                                    className="form-field"
                                    value={number}
                                    placeholder="Number"
                                    type="text"
                                    id="number"
                                    name="number" />
                                <input
                                    onChange={(event) => setImgUrl(event.target.value)}
                                    className="form-field"
                                    value={img_url}
                                    placeholder="Image"
                                    type="text"
                                    id="image"
                                    name="image" />
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="form-field"
                                    value={email}
                                    placeholder="Email"
                                    type="text"
                                    id="email"
                                    name="email" />
                                <Button variant="success" type="submit"> Add</Button>
                            </form>
                        </div>
                    </div>
                </div>
            } </div>
    )
}

export default ClientForm