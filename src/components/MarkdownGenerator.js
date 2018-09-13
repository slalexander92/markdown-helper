import React, { Component } from 'react';
import '../stylesheets/App.css';
import Input from './Input'
import Preview from './Preview'

class MarkdownGenerator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input  : '',
      output : ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){

    const input = e.target.value;

    this.setState({ input, output : input });
  }

  render() {
    return (
      <div>
        <Input handleInput={this.handleInput}/>
        <Preview output={ this.state.output } />
      </div>
    );
  }
}

export default MarkdownGenerator;
