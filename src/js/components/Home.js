import React, { Component } from 'react';
import Navbar from './Navbar';
import TextBox from './TextBox';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        "This is my home page"
        <TextBox />
      </div>
    );
  }
}
