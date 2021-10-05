import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Route path='/home'>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
