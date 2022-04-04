import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from "react"
import AppointmentCard from './AppointmentCard'

function Appointments({ currentUser }) {
    const [appointments, setAppointments] = useState([])

    function removeAppointment(appointment) {
        setAppointments((appointments) => appointments.filter(appoint => appoint.id !== appointment.id))
      }

    function appointmentEdit(appointment) {
        const edited = appointments.map(app => {
            if (appointment.id === app.id) {
                return appointment
            }
            return app
        })
        setAppointments(edited)
    }

    useEffect(() => {
        fetch(`/users/${currentUser.id}`)
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data.appointments)
            })// eslint-disable-next-line 
    }, []) 

    const orderByDate = () => {
        fetch("/order/appointments")
            .then((res) => res.json())
            .then((order) => setAppointments(order))
    };

    const renderAppointments = appointments&&appointments.map((app) => <AppointmentCard appointmentEdit={appointmentEdit} currentUser={currentUser} appointment={app} key={app.id} removeAppointment={removeAppointment} order={orderByDate}/>)

    return (
        <div className="App">
            <div>
                <br />
                <br />
                <h1>Appointments</h1>
                <br />
                <Button variant="outline-secondary" size="sm" onClick={orderByDate}>Order by Date</Button>
                <br />
                {renderAppointments}
            </div>
        </div>
    )
}

export default Appointments