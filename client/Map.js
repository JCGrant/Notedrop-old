import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Tooltip from 'rc-tooltip';


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

const markerHoverStyle = {
  ...markerStyle,
  border: '2px solid white',
  cursor: 'pointer'
};


const USER_MARKER_RADIUS = 10;

const userMarkerStyle = {
  position: 'absolute',
  width: USER_MARKER_RADIUS,
  height: USER_MARKER_RADIUS,
  left: -USER_MARKER_RADIUS / 2,
  top: -USER_MARKER_RADIUS / 2,

  border: '1px solid white',
  borderRadius: USER_MARKER_RADIUS,
  backgroundColor: '#5cd0fc'
};


const Marker = (props) => {
  const style = props.$hover ? markerHoverStyle : markerStyle;
  return (
    <Tooltip
      animation="zoom"
      trigger="click"
      overlay={<span>{props.text}</span>}
    >
      <div style={style}></div>
    </Tooltip>
  );
};


const UserMarker = (props) => {
  return (
    <div style={userMarkerStyle}></div>
  )
};


export default class Map extends Component {
  constructor() {
    super();
  }

  onChildClick = (key, childProps) => {
    console.log(key, childProps);
  };

  render() {
    const zoom = 18;
    const userMarkerProps = {
      lat: this.props.center[0],
      lng: this.props.center[1]
    }
    return (
       <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyAXrpAfAJS8tyfTm-huImT3kRbyQOhuQ8M'}}
        center={this.props.center}
        zoom={zoom}
        onChildClick={this.onChildClick}
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
        <UserMarker {...userMarkerProps}/>
      </GoogleMap>
    );
  }
}
