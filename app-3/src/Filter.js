import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let foodsToDisplay = this.state.foods
      .filter((elem, ind) => {
        return elem.includes(this.state.filterString);
      })
      .map((elem, ind) => {
        return <h2 key={ind}>{elem}</h2>;
      });
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <h2>{foodsToDisplay}</h2>
      </div>
    );
  }
}

export default Filter;
