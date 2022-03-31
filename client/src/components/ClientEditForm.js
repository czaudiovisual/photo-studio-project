import React, { useState } from "react"
import { Button } from "react-bootstrap"

function EditClientForm({ currentUser, client, clientEdit, handleEditButtonClick }) {
    const [client_name, setClientName] = useState(client.client_name)
    const [number, setNumber] = useState(client.number)
    const [img_url, setImgUrl] = useState(client.img_url)
    const [email, setEmail] = useState(client.email)

    function handleOnSubmit(event) {
        event.preventDefault()
        setClientName("")
        setNumber("")
        setImgUrl("")
        setEmail("")
        fetch(`/clients/${client.id}`, {
            method: "PATCH",
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
        })
            .then(res => res.json())
            .then(cli => {
                clientEdit(cli)
                handleEditButtonClick()
            })
    }

    return (
        <div>
            <form className="register-form" onSubmit={handleOnSubmit}>
                <br />
                <h5>Edit Client</h5>
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
                    id="image_url"
                    name="image_url" />
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-field"
                    value={email}
                    placeholder="Email"
                    type="text"
                    id="email"
                    name="email" />
                <div className="d-grid gap-3">
                    <Button variant="success" size="sm" type="submit">Edit</Button>
                </div>
            </form>
        </div>
    )
}

export default EditClientForm