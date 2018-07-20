import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particleOption = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 20,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}

const app = new Clarifai.App({
 apiKey: 'd5c3c9cdc9e14c59a540f32114deb9a1'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageSrc: '',
      box: {},
      route: 'signin',
      warning: false,
    }
  }

  calculateFaceLocation = (data) => {
    const identifiedFaces = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image =  document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: identifiedFaces.left_col *  width,
      topRow: identifiedFaces.top_row * height,
      rightCol: width - identifiedFaces.right_col *  width,
      bottomRow: height - identifiedFaces.bottom_row * height,
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onDetect = () => {
    this.setState({
      box: {},
      imageSrc: this.state.input
    });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((res) => {
      this.displayFaceBox(this.calculateFaceLocation(res));
      console.log(this.state)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  displayedUserName = () => {
    return this.state.username;
  }

  showWarning = () => {
    console.log("sdsdsd")
    if( this.state.warning ){
      return "mt3";
    }else {
      return "mt3 hidden";
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOption}
        />
        {
          this.state.route === 'home' ?
            <div>
              <Navigation onRouteChange={this.onRouteChange} displayedUserName={this.state.username}/>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onDetect={this.onDetect} />
              <FaceRecognition box={this.state.box} imageSrc={this.state.imageSrc} />
            </div> : (
              this.state.route === 'signin' ?
                <SignIn onRouteChange={this.onRouteChange} signIn={this.signIn} onUsernameChange={this.onUsernameChange}
                  onPasswordChange = {this.onPasswordChange} showWarning={this.showWarning}/> :
                  <Register onRouteChange={this.onRouteChange }/>
            )
        }
      </div>
    );
  }
}

export default App;
