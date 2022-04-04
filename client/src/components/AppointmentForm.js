import React, { useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { Button, Alert } from 'react-bootstrap'
import ClientsDropdown from './ClientsDropdown'

function AppointmentForm({ currentUser, addAppointment }) {
    const [img_url, setImgUrl] = useState("")
    const [style, setStyle] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [clientId, setClientId] = useState("")
    const [errors, setErrors] = useState("")
    const [submit, setSubmit] = useState(false)
    const history = useHistory()

    function handleOnSubmit(event) {
        event.preventDefault()
        setImgUrl("")
        setStyle("")
        setTime("")
        setDate("")
        setLocation("")
        setDescription("")
        setClientId("")
        fetch("/appointments", {
            method: "POST",
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
        }).then((response) => {
            if (response.ok) {
                response.json().then((app) => {
                    addAppointment(app)
                    setSubmit(true)
                }).catch((error) => {
                    history.push('/appointments')
                })
            } else {
                response.json().then(errors => {
                    setErrors(errors.errors)
                })
            } 
            })
        }
        
    const displayError = () => {
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    return (
        <div>
            <br />
            <br />
            <h1>Add Appointment</h1>
            <br />
            {submit ? <Redirect to="/appointments" /> :
                <div>
                    <div className="form-outsider">
                        <div className="form-container">
                            <form className="register-form" onSubmit={handleOnSubmit}>
                                {errors ?
                                    <Alert className="App" variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                                }
                                {<ClientsDropdown setClientId={setClientId} />}
                                <input
                                    onChange={(event) => setImgUrl(event.target.value)}
                                    className="form-field"
                                    value={img_url}
                                    placeholder="Image URL"
                                    type="text"
                                    id="img_url" />
                                <input
                                    onChange={(event) => setStyle(event.target.value)}
                                    className="form-field"
                                    value={style}
                                    placeholder="Style"
                                    type="text"
                                    id="style" />
                                <input
                                    onChange={(event) => setTime(event.target.value)}
                                    className="form-field"
                                    value={time}
                                    placeholder="Time"
                                    type="text"
                                    id="time" />
                                <input
                                    onChange={(event) => setDate(event.target.value)}
                                    className="form-field"
                                    value={date}
                                    placeholder="Date"
                                    type="text"
                                    id="date" />
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
                                    id="description" />
                                <Button onClick={handleOnSubmit} variant="success" type="submit" value="Submit"> Add</Button>
                            </form>
                        </div>
                    </div>
                </div>
            } </div>
    )
}

export default AppointmentForm 