import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import NavigationBar from './components/NavigationBar';
import { Button } from 'react-bootstrap'
import Clients from './components/Clients'
import Appointments from './components/Appointments'
import ClientForm from './components/ClientForm'
import AppointmentForm from './components/AppointmentForm'



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [clients, setClients] = useState([])
  const [appointments, setAppointments] = useState([])


  useEffect(() => {
    fetch('/me').then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
        })
      }
    })
  }, [])

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then(res => {
      setCurrentUser(null)
    })
  }

  function addClient(client) {
    setClients([...clients, client])
  }

  function addAppointment(appointment) {
    setAppointments([...appointments, appointment])
  }


  if (!currentUser) return <LoginForm setCurrentUser={setCurrentUser} />

  return (
    <div className="App">
      <span>Logged in as {currentUser.username} <Button variant="danger" size="sm" onClick={handleLogoutClick}>Logout</Button></span>
      <nav>
        <NavigationBar />
      </nav>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Clients}>
              <Clients currentUser={currentUser} />
            </Route>
            <Route exact path="/clients/new">
              <ClientForm key={clients.id} currentUser={currentUser} addClient={addClient} />
            </Route>
            <Route exact path="/appointments" component={Appointments}>
              <Appointments currentUser={currentUser} />
            </Route>
            <Route exact path="/appointments/new" key={clients.id}  currentUSer={currentUser} addAppointment={addAppointment}>
              <AppointmentForm currentUser={currentUser} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;
