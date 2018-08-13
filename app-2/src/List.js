import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    let foodsToDisplay = this.state.foods.map((e, ind) => {
      return <h1 key={ind}>{e}</h1>;
    });
    return <div>{foodsToDisplay}</div>;
  }
}

export default List;
