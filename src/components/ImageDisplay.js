import React, { Component } from 'react';
import '../styles/App.css';

export default class ImageDisplay extends Component {
  render() {
    let array = this.props.images;
    let photos = array.map( (photo, index) => {
      return (
        <div key={index}>
          <img src={photo.img_src} alt='the surface of Mars as seen by the Mars Rover'></img>
        </div>
      )
    });
    return (
      <div>
        {photos}
      </div>
    );
  }
}
