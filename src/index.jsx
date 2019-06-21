import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('container'));
