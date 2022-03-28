import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthenticatedApp({ currentUser, setCurrentUser }) {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginForm setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/signup">
                    <SignupForm setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </Router>
    )
}
export default AuthenticatedApp