import React, { Component } from 'react';
import '../stylesheets/App.css';
import MarkdownGenerator from './MarkdownGenerator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownGenerator />
      </div>
    );
  }
}

export default App;
