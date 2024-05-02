import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import SignUpForm from './components/signUp';
import HomePage from './components/home';




function App() {

  const [isSignedUp, setIsSignedUp] = useState(false);
  const handleSignUpSuccess = () => {
    setIsSignedUp(true);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
          </Route>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
