import React, { Component } from "react";

class Input extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleChange(value) {
    this.setState({ input: value });
  }

  render() {
    return (
      <div className="total">
        <input
          className="line"
          onChange={e => this.handleChange(e.target.value)}
        />
        <div>{this.state.input}</div>
      </div>
    );
  }
}

export default Input;
