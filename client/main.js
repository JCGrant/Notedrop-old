import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import './style.scss';


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
    return (
      <div className="container">
        <h3>Notes</h3>
        <ul>
          {this.state.notes.map((note) => (
            <li key={note.id}>
              "{note.text}" @ {note.latitude}N, {note.longitude}W
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
