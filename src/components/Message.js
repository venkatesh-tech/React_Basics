import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super(); // because call should be made to base class
    this.state = {
      // this.state is like a reserved keyword in react
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    // setState takes an object
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}

export default Message;
