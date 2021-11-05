import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { CreatePage } from './pages/CreatePage';
import { EditPage } from './pages/EditPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Route path='/home'>
        <HomePage />
      </Route>
      
      <Route path='/new'>
        <CreatePage />
      </Route>
      
      <Route path='/edit/:id'>
        <EditPage />
      </Route>

      <Route path='/'>
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
