import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/home';
import Landing from '../pages/landing';
import LogIn from '../pages/logIn'
import SingUp from '../pages/singUp';

import './styles/main.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route  exact path="/" component={Landing}   />
      <Route  exact path='/home' component={Home} />
      <Route  exact path="/log-in" component={LogIn}  />
      <Route  exact path="/sing-up" component={SingUp}   />
    </Switch>
  </BrowserRouter>
)

export default App;