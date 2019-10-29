//Npm dependncies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
//Local components

import Home from 'Components/Views/Home';
import ErrorView from 'Components/Views/Error';



const App = (props)=> {

  return (
      <React.Fragment>
        <Switch>
	        <Route exact path="/"component = {Home}/>
   
          <Route component = {ErrorView}/>

        </Switch>
      </React.Fragment>
    );
  }

export default App;

