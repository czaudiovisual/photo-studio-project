import { useState } from "react"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ClientEditForm from "./ClientEditForm"

const ClientCard = ({ client, removeClient, currentUser, clientEdit }) => {
    const [clientEditForm, setClientEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show edit Form")

    function handleDeleteClient(client) {
        fetch(`/clients/${client.id}`, {
            method: 'DELETE'
        }).then(res => {
            removeClient(client)
        })
    }

    function handleEditButtonClick() {
        setClientEditForm(!clientEditForm)
        !clientEditForm ? setEditButton("Hide Edit Form") : setEditButton("Show edit Form")
    }

    return (
        <div className="body-client">
            <div className="card-box">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" className="img-size" alt="img-url" src={client.img_url} />
                    <Card.Body>
                        <Card.Title>{client.client_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Number: {client.number}</Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">E-mail: {client.email}</Card.Subtitle>
                        <div className="d-grid gap-2">
                            <Button variant="danger" size="sm" onClick={event => handleDeleteClient(client)}>Delete</Button>
                            <Button variant="primary" size="sm" onClick={event => handleEditButtonClick()}>{editButton}</Button>
                        </div>
                        {clientEditForm ? <ClientEditForm handleEditButtonClick={handleEditButtonClick} clientEdit={clientEdit} client={client} currentUser={currentUser}/> : null}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ClientCard