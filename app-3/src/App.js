import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Filter from "./Filter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;
