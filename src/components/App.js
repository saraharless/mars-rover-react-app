import React, { Component } from 'react';
import '../styles/App.css';
import apiKey from './apiKey';
import GetImageForm from './GetImageForm.js'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <GetImageForm />
    );
  }
}

export default App;
