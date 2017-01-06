import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import './style.scss';

import Map from './Map';


const getLocation = () => {
  // Temporary hardcoded location
  return '51.499/-0.172';
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    fetch('/notes/' + getLocation())
      .then((response) => response.json())
      .then((notes) => {
        this.setState({notes})
      });
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
