import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Landing from '../pages/landing';
import LogIn from '../pages/logIn'
import SingIn from '../pages/singIn';
import './styles/main.css';
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/s" component={Landing} />
        <Route exact path="/ss" component={LogIn} />
        <Route exact path="/none" component={SingIn} />
      </Switch>
  </BrowserRouter>
)

export default App;