import { Card } from "react-bootstrap";

const ClientCard = ({ client }) => {

return (
    <div>
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className="img-size" alt="img-url" src={client.img_url} />
            <Card.Body>
                <Card.Title>{client.client_name}<h1></h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Number: {client.number}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">E-mail: {client.email}</Card.Subtitle>
            </Card.Body>
        </Card>
    </div>
</div>
)

}

export default ClientCard