import React from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
    	<Switch>
        <Route path="/" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
