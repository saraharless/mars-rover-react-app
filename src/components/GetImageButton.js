import React, { Component } from 'react';
import '../styles/App.css';

export default class GetImageButton extends Component {

  render() {
    return (

      <button onClick={this.props.click}>Submit</button>
      
    );
  }
}
