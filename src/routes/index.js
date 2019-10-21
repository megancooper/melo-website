import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Download from '../containers/Download';
import Redirect from '../components/Redirect';

const Routes = () => (
  <Switch>
    <Route component={Home} exact path='/' />
    <Route component={Download} exact path='/download' />
    <Route component={Redirect} />
  </Switch>
);

export default Routes;
