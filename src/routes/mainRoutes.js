import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { Register } from '../pages/Register';
import CloseRoutes from './closeRoutes';

export function Routes() {
  return (
    <Switch>
      <CloseRoutes path='/' exact component={Home} isCLosed={false} />
      <CloseRoutes path='/login' exact component={Login} isCLosed={false} />
      <CloseRoutes
        path='/register'
        exact
        component={Register}
        isCLosed={false}
      />
    </Switch>
  );
}
