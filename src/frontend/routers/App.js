import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Landing from '../pages/landing';
import './styles/main.css';
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/la" component={Home} />
        <Route exact path="/" component={Landing} />
      </Switch>
  </BrowserRouter>
)

export default App;