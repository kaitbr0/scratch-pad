import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Router } from 'react-router-dom';
import history from './history';
import App from './App';
import Home from './components/Home';
import Profile from './components/Profile';
import './index.scss';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" exact component={Home} />
    <Route path="/profile" component={Profile} />
    <Route render={() => <Redirect to="/" />} />
  </Router>,
  document.getElementById('root')
);
