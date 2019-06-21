import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from './Dashboard/DashboardContainer';

function App() {
  return (

    <Switch>
      <Route exact path="/home" component={DashboardContainer} />
      <Route path="/abc" render={() => (<h1>Here</h1>)} />
      <Route render={() => <h1>Not found</h1>} />
    </Switch>

  );
}

export default App;
