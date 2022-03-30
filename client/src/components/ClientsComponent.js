import React, { useEffect, useState } from "react"
import ClientCard from './ClientCard'

function ClientsComponent() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch("/clients")
        .then((res) => res.json())
        .then(setClients)
    }, [])

    const renderClients = clients.map((client) => <ClientCard client={client} key={client.id}/>)

    return (
        <div className="App">
            <div>
                <h1>Clients</h1>
                {renderClients}
            </div>
        </div>
    )
}
export default ClientsComponent