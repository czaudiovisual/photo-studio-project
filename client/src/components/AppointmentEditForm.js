import React, { useState } from "react"
import { Button } from "react-bootstrap"

function AppointmentEditForm({ currentUser, appointment, appointmentEdit, handleEditButton}) {
    const [img_url, setImgUrl] = useState(appointment.img_url)
    const [style, setStyle] = useState(appointment.style)
    const [time, setTime] = useState(appointment.time)
    const [date, setDate] = useState(appointment.date)
    const [location, setLocation] = useState(appointment.location)
    const [description, setDescription] = useState(appointment.description)
    const [clientId, setClientId] = useState(appointment.client_id)

    function handleOnSubmit(event) {
        event.preventDefault()
        setImgUrl("")
        setStyle("")
        setTime("")
        setDate("")
        setLocation("")
        setDescription("")
        setClientId("")
        fetch(`/appointments/${appointment.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                img_url,
                style,
                time,
                date,
                location,
                description,
                user_id: currentUser.id,
                client_id: clientId
            }),
        })
            .then(res => res.json())
            .then(app => {
                appointmentEdit(app)
                handleEditButton()
            })
    }

    return (
        <div>
            <form className="register-form" onSubmit={handleOnSubmit}>
                <br />
                <h5>Edit Appointment</h5>
                <input
                    onChange={(event) => setImgUrl(event.target.value)}
                    className="form-field"
                    value={img_url}
                    placeholder="Image URL"
                    type="text"
                    id="img_url"
                    name="img_url" />
                <input
                    onChange={(event) => setStyle(event.target.value)}
                    className="form-field"
                    value={style}
                    placeholder="Style"
                    type="text"
                    id="style"
                    name="style" />
                <input
                    onChange={(event) => setTime(event.target.value)}
                    className="form-field"
                    value={time}
                    placeholder="Time"
                    type="text"
                    id="time"
                    name="time" />
                <input
                    onChange={(event) => setDate(event.target.value)}
                    className="form-field"
                    value={date}
                    placeholder="Date"
                    type="text"
                    id="date"
                    name="date" />
                <input
                    onChange={(event) => setLocation(event.target.value)}
                    className="form-field"
                    value={location}
                    placeholder="Location"
                    type="text"
                    id="location"
                    name="location" />
                <textarea
                    onChange={(event) => setDescription(event.target.value)}
                    className="form-field"
                    value={description}
                    placeholder="Description"
                    type="text"
                    id="description"
                    name="description" />
                <div className="d-grid gap-3">
                    <Button variant="success" size="sm" type="submit">Edit</Button>
                </div>
            </form>
        </div>
    )
}

export default AppointmentEditForm