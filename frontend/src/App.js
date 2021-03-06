import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Tasks from './Components/Tasks';


import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks"><Tasks /></Route>
      </Switch>
    </Router>
  );
}

export default App;
