import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ClientCard = ({ client, removeClient }) => {

    function handleDeleteClient(client) {
        fetch(`/clients/${client.id}`, {
            method: 'DELETE'
        }).then(res => {
            removeClient(client)
        })
    }

    return (
        <div className="body-client">
            <div className="card-box">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" className="img-size" alt="img-url" src={client.img_url} />
                    <Card.Body>
                        <Card.Title>{client.client_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Number: {client.number}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">E-mail: {client.email}</Card.Subtitle>
                        <Button variant="danger" size="sm" onClick={event => handleDeleteClient(client)}>Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ClientCard