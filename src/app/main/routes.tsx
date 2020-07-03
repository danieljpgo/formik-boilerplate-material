import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from '../common/layout/Navigation';

import Material from '../modules/Material';
import Chakra from '../modules/Chakra';
// import { Container } from './styles';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Navigation>
      <Switch>
        <Route
          component={Material}
          path="/"
          exact
        />
        <Route
          component={Material}
          path="/material"
        />
        <Route
          component={Chakra}
          path="/chakra"
        />
      </Switch>
    </Navigation>
  </BrowserRouter>
);

export default Routes;
