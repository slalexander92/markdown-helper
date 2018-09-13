import React, { Component } from 'react';
import '../stylesheets/App.css';
import {markdown} from 'markdown';
import renderHTML from 'react-render-html';

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output : ''
    }

    this.convertToMarkdown = this.convertToMarkdown.bind(this);
  }

  convertToMarkdown( input ){

    return markdown.toHTML( input )

  }

  render() {

    return (
      <div id="preview-wrapper">
        <h1>Receive bacon (markdown):</h1>
        <div id="preview">
        { renderHTML( this.convertToMarkdown( this.props.output ) ) }
        </div>
      </div>
    );
  }
}

export default Preview;
