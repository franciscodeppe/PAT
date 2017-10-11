import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';

import Progress from './Progress';
import Main from './Main';
import NoMatch from './NoMatch';
import Signup from './Signup';
import Logout from './Logout';

const Page = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/logout' component={Logout} />
    <Route exact path='/main' component={Main} />
    <Route exact path='/progress' component={Progress} />
    <Route component={NoMatch} />
  </Switch>
);

export default Page;
