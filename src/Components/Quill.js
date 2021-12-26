import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../src/style.css";


export default class Editor extends React.Component {
  state = { editorHtml: "" };

  handleChange = html => {
    this.setState({ editorHtml: html });
  };

  render() {
    return (
      <div>
        <ReactQuill
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          // modules={Editor.modules}
          // formats={Editor.formats}
          onBlur={this.props.onBlur}
        
        />
      </div>
    );
  }
}