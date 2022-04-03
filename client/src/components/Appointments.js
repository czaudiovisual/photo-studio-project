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

    const renderAppointments = appointments?.map((app) => <AppointmentCard appointmentEdit={appointmentEdit} currentUser={currentUser} appointment={app} key={app.id} removeAppointment={removeAppointment}/>)

    return (
        <div className="App">
            <div>
                <br />
                <br />
                <h1>Appointments</h1>
                <br />
                {renderAppointments}
            </div>
        </div>
    )
}

export default Appointments