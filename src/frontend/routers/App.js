import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Landing from '../pages/landing';
import LogIn from '../pages/logIn'
import './styles/main.css';
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/la" component={Home} />
        <Route exact path="/s" component={Landing} />
        <Route exact path="/" component={LogIn} />
      </Switch>
  </BrowserRouter>
)

export default App;