import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { Register } from '../pages/Register';
import { AllNews } from '../pages/News';
import { Statistics } from '../pages/Statistics';

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
      <CloseRoutes path='/news' exact component={AllNews} isCLosed />
      <CloseRoutes
        path='/statistics'
        exact
        component={Statistics}
        isCLosed={false}
      />
    </Switch>
  );
}
