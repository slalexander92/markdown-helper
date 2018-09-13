import React, { Component } from 'react';
import '../stylesheets/App.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

  }

  render() {
    return (
      <div id="input-wrapper">
        <h1>insert markdown:</h1>
        <textarea onChange={this.props.handleInput}/>
      </div>
    );
  }
}

export default Input;
