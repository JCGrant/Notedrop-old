import React, { Component } from 'react';
import GoogleMap from 'google-map-react';


export default class Map extends Component {
  constructor() {
    super();
  }

  render() {
    const zoom = 17;
    return (
       <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyAXrpAfAJS8tyfTm-huImT3kRbyQOhuQ8M'}}
        center={this.props.center}
        zoom={zoom}
        options={{
          maxZoom: zoom,
          minZoom: zoom,
          draggable: false,
          keyboardShortcuts: false,
          disableDefaultUI: true
        }}>
      </GoogleMap>
    );
  }
}
