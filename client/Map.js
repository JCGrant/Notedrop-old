import React, { Component } from 'react';
import GoogleMap from 'google-map-react';


const MARKER_RADIUS = 40;

const markerStyle = {
  position: 'absolute',
  width: MARKER_RADIUS,
  height: MARKER_RADIUS,
  left: -MARKER_RADIUS / 2,
  top: -MARKER_RADIUS / 2,

  border: '2px solid #f44336',
  borderRadius: MARKER_RADIUS,
  backgroundColor: 'white'
};


const Marker = (props) => {
  return (
     <div style={markerStyle}></div>
  );
};


export default class Map extends Component {
  constructor() {
    super();
  }

  render() {
    const zoom = 18;
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
        {this.props.markers.map((marker, i) => {
          const markerProps = {
            lat: marker.latitude,
            lng: marker.longitude,
            text: marker.text,
          };
          return <Marker key={i} {...markerProps} />
        })}
      </GoogleMap>
    );
  }
}
