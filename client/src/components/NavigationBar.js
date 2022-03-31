import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'

function NavigationBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img className="photo-size" alt="icon" src="https://smallimg.pngkey.com/png/small/118-1185948_710-cartoon-illustration-of-hand-with-camera-clipart.png" />
                    <Navbar.Brand>Photo Studio Manager</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Clients</Nav.Link>
                        <Nav.Link href="/clients/new">Add Client</Nav.Link>
                        <Nav.Link href="/appointments">Appointments</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;