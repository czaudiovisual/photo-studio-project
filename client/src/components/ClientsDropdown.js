import React, { useState, useEffect } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';

function ClientsDropdown({setClientId, clientName}) {
    const [clients, setClients] = useState([]) 
    const [selectedClient, setSelectedClient] = useState(clientName);
    
    useEffect(() => {
        fetch("/clients")
            .then((res) => res.json())
            .then((clients) => {
                setClients(clients)
                setSelectedClient(clientName)
            })// eslint-disable-next-line
    }, [])    

    const handleOnSelect = (event) => {
        event.preventDefault();
        setClientId(event.target.value);
        setSelectedClient(event.target.name);
    }
    
    const renderClientsDropdown = clients?.map((client) => <Dropdown.Item as="button" onClick={handleOnSelect} name={client.client_name} value={client.id}>{client.client_name}</Dropdown.Item>)     
  
    return (
        <DropdownButton id="dropdown-item-button" title={selectedClient || "Select a Client"} >
            {renderClientsDropdown}
        </DropdownButton>
    );
}

export default ClientsDropdown;