import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Header from './cmps/Header'
import TeamsPage from './pages/TeamsPage'

function App() {
  return (
    <container className="app">
    <Header/>
    <Switch>
    <Route component={TeamsPage} path="/" />
    </Switch>
    </container>
  );
}

export default App;
