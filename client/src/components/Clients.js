import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from "react"
import ClientCard from './ClientCard'

function Clients({ currentUser, countAppointments }) {
    const [clients, setClients] = useState([])

    function removeClient(client) {
        setClients((clients) => clients.filter(cli => cli.id !== client.id))
    }

    function clientEdit(client) {
        const edited = clients.map(cli => {
            if (client.id === cli.id) {
                return client
            }
            return cli
        })
        setClients(edited)
    }

    useEffect(() => {
        fetch(`/users/${currentUser.id}`)
            .then((res) => res.json())
            .then((data) => {
                setClients(data.clients)
            })// eslint-disable-next-line 
    }, [])

    const orderByName = () => {
        fetch("/order/clients")
            .then((res) => res.json())
            .then((order) => setClients(order))
    };

    const renderClients = clients&&clients.map((cli) => <ClientCard clientEdit={clientEdit} currentUser={currentUser} client={cli} key={cli.id} removeClient={removeClient} countAppointments={countAppointments}/>)

    return (
        <div className="App">
            <div>
                <br />
                <br />
                <h1>Clients</h1>
                <br />
                <Button variant="outline-secondary" size="sm" onClick={orderByName}>order by name</Button>
                <br />
                {renderClients}
            </div>
        </div>
    )
}

export default Clients