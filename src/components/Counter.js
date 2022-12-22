import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count = this.state.count + 1; // for this value is updated in console but not changed in ui
    // console.log(this.state.count);

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Call Back Value", this.state.count);
      }
    );
    console.log(this.state.count); // Asynchronous and synchronous
  }

  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.increment()}>Incremet</button>
      </div>
    );
  }
}

export default Counter;
