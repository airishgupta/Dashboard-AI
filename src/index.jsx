import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardContainer from './Dashboard/DashboardContainer';

const history = createBrowserHistory();

class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={DashboardContainer} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('container'));
