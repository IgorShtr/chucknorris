import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MainView } from './vews/main';
// import {  ActionState } from '../components/stateContext';


function App() {
  return (
    // <ActionState>  
      <HashRouter basename="/filmsList">
        <Switch>
          <Route exect path='/chucknorris' component={MainView} />
          {/* <Route path='/movieDetales/:id' component={FilmDetails} /> */}
          <Redirect to="/chucknorris" />
        </Switch>
      </HashRouter>
      // </ActionState>
  );
}

export default App;
