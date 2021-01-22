import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';

export default class Routes extends Component {
  componentDidMount() {
    this.state = [];
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  }
}
