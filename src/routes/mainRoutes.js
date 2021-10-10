import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import { Register } from '../pages/Register';
import { AllNews } from '../pages/News';
import { Statistics } from '../pages/Statistics';

import CloseRoutes from './closeRoutes';
import { Videos } from '../pages/Videos';
import { Page404 } from '../pages/Page404';
import { ShowNews } from '../pages/ShowNews';

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
        path='/statistics/:table'
        exact
        component={Statistics}
        isCLosed={false}
      />

      <CloseRoutes path='/videos' exact component={Videos} isCLosed={false} />
      <CloseRoutes
        path='/:newsId/:titleUrl'
        component={ShowNews}
        isCLosed={false}
      />
      <CloseRoutes path='*' component={Page404} isCLosed={false} />
    </Switch>
  );
}
