import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <Switch>
      <Route path='/home'>
        <HomePage />
      </Route>
      
      <Route path='/edit/:id'>
        <EditPage />
      </Route>
    </Switch>
  );
}

export default App;
