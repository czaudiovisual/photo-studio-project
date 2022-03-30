import React, { useEffect, useState } from "react"
import ClientCard from './ClientCard'

function ClientsComponent() {
    const [clients, setClients] = useState([])

    function removeClient(cli) {
        setClients((clients) => clients.filter(client => client.id !== cli.id))
    }

    function editClient(client) {
        const edited = clients.map(cli => {
            if (client.id === cli.id) {
                return client
            }
            return cli
        })
        setClients(edited)
    }

    useEffect(() => {
        fetch("/clients")
            .then((res) => res.json())
            .then(setClients)
    }, [])

    const renderClients = clients.map((client) => <ClientCard editClient={editClient} client={client} key={client.id} removeClient={removeClient} />)

    return (
        <div className="App">
            <div>
                <br />
                <br />
                <h1>Clients</h1>
                <br />
                {renderClients}
            </div>
        </div>
    )
}
export default ClientsComponent