import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// handler layout
import AppRoute from '../components/general/appRouter';

// pages
import General from '../components/home/cards'
import Landing from '../pages/landing';
import LogIn from '../pages/logIn'
import SingUp from '../pages/singUp';

// Layouts
import NoLayout from '../components/general/noLayout';
import HomeLayout from '../pages/home';

import './styles/main.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute  exact path="/" component={Landing} layout={NoLayout}  />
      <AppRoute  exact path='/home' component={General} layout={HomeLayout}/>
      <AppRoute  exact path="/log-in" component={LogIn} layout={NoLayout} />
      <AppRoute  exact path="/sing-up" component={SingUp} layout={NoLayout}  />
    </Switch>
  </BrowserRouter>
)

export default App;