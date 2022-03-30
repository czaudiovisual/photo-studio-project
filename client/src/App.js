import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import NavigationBar from './components/NavigationBar';
import { Button } from 'react-bootstrap'
import ClientsComponent from './components/ClientsComponent'



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [clients, setClients] = useState([])

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
            <Route exact path="/" component={ClientsComponent}>
              <ClientsComponent currentUser={currentUser} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;
