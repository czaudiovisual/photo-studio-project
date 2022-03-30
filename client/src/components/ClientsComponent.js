import React, { useEffect, useState } from "react"
import ClientCard from './ClientCard'

function ClientsComponent() {
    const [clients, setClients] = useState([])

    function removeClient(cli) {
        setClients((clients) => clients.filter(client => client.id !== cli.id))
    }

    useEffect(() => {
        fetch("/clients")
            .then((res) => res.json())
            .then(setClients)
    }, [])

    const renderClients = clients.map((client) => <ClientCard className="hello" client={client} key={client.id} removeClient={removeClient} />)

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