import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UnAuthenticatedApp from './UnAuthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
    useEffect(() => {
      fetch('/me').then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          })
        }
      })
    }, [])

 
  return (
    <div className="App">
      <Router>
        {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnAuthenticatedApp
            setCurrentUser={setCurrentUser}
          />
        )
        }
      </Router>
    </div>
  )
}

export default App;
