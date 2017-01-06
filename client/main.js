import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import './style.scss';

import Map from './Map';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      location: []
    };
  }

  onPositionUpdate = (position) => {
  console.log("Updating position");
    const {latitude, longitude} = position.coords;
    this.setState({
      location: [latitude, longitude]
    });
    fetch('/notes/' + latitude + '/' + longitude)
      .then((response) => response.json())
      .then((notes) => {
        this.setState({notes});
      });
  };

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(this.onPositionUpdate,
    () => {},
    {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map center={this.state.location} markers={this.state.notes} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
