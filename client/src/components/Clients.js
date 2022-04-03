
import React, { useEffect, useState } from "react"
import ClientCard from './ClientCard'

function Clients({ currentUser }) {
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

    const renderClients = clients?.map((cli) => <ClientCard clientEdit={clientEdit} currentUser={currentUser} client={cli} key={cli.id} removeClient={removeClient}/>)

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

export default Clients