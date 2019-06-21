import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from './Dashboard/DashboardContainer';

function App() {
  return (
    <div>
      <Route path="/" component={DashboardContainer} />
    </div>

  );
}

export default App;
