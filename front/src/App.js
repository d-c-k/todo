import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { DataContext } from './contexts/DataContext';

import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';

function App() {
  const [todoItems, setTodoItems] = useState(null);
  const [createNewItem, setCreateNewItem] = useState(false);
  const DataContextValue = {
    todoItems,
    setTodoItems,
    createNewItem,
    setCreateNewItem
  };

  return (
    <DataContext.Provider value={DataContextValue}>
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        
        <Route path='/'>
          <LoginPage />
        </Route>
      </Switch>
    </DataContext.Provider>
  );
}

export default App;
