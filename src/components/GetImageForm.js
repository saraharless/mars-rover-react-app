import React, {
  Component
} from 'react';
import '../styles/App.css';
import apiKey from './apiKey.js';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';
const API_KEY = apiKey;

export default class GetImageForm extends Component {
  constructor(props){
    super(props)

    this.state = {
  rover: "Curiosity",
  camera: "FHAZ",
  images: [],
  sol: "",
}
      this.fetchRoverImage = this.fetchRoverImage.bind(this);

}
  fetchRoverImage(){
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
let cam = this.state.camera;
let rove = this.state.rover;
let num = this.state.sol;

let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

      fetch(imageUrl)
      .then(results => results.json())
      .then(responseData => {
        this.setState({images: responseData.photos
        })
      })
  }

  render() {
    return (
      <form>

      <label htmlFor="rover">Rover</label>
<select onChange={this.handleRover} id="rover">
<option value="Curiosity">Curiosity</option>
<option value="Opportunity">Opportunity</option>
<option value="Spirit">Spirt</option>
</select>
<label htmlFor="camera">Camera Type</label>
<select onChange={this.handleCamera} id="rover">
<option value="fhaz">FHAZ (Front Hazard)</option>
<option value="rhaz">RHAZ (Rear Hazard)</option>
<option value="navcam">NAVCAM (Navigation Cam)</option>
</select>
<label htmlFor="sol">Martian Sol: 1000-2000</label>
<input type="number" onChange={this.handleSol} max="2000" min="1000"/>

      </form>
    )
  }
  }
