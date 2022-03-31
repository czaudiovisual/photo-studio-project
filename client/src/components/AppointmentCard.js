import { useState } from "react"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AppointmentEditForm from "./AppointmentEditForm"

const AppointmentCard = ({ appointment, currentUser, appointmentEdit, removeAppointment}) => {
    const [appointmentEditForm, setAppointmentEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show edit Form")

    function handleDeleteAppointment(appointment) {
        fetch(`/appointments/${appointment.id}`, {
            method: 'DELETE'
        }).then(res => {
            removeAppointment(appointment)
        })
    }

    function handleEditButton() {
        setAppointmentEditForm(!appointmentEditForm)
        !appointmentEditForm ? setEditButton("Hide Edit Form") : setEditButton("Show edit Form")
    }

    return (
        <div className="body-client">
            <div className="card-box">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" className="img-size" alt="img-url" src={appointment.img_url} />
                    <Card.Body>
                        <Card.Title>{appointment.style}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Time: {appointment.time}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Date: {appointment.date}</Card.Subtitle>
                        <Card.Subtitle className="mb-0 text-muted">Location: {appointment.location}</Card.Subtitle>
                        <Card.Text className="mb-4 text-muted">Description: {appointment.description}</Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="danger" size="sm" onClick={event => handleDeleteAppointment(appointment)}>Delete</Button>
                            <Button variant="primary" size="sm" onClick={event => handleEditButton()}>{editButton}</Button>
                        </div>
                        {appointmentEditForm ? <AppointmentEditForm handleEditButton={handleEditButton} appointmentEdit={appointmentEdit} appointment={appointment} currentUser={currentUser}/> : null}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default AppointmentCard