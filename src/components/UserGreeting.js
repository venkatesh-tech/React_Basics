import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    //Method 1 using if-else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Venkatesh</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }

    //Method -2 Using element variables
    // let message;
    // if (this.state.isLoggedIn) message = <div>Welcome venkatesh</div>;
    // else message = <div>Welcome guest</div>;
    // return <div>{message}</div>;

    //Method -3 Using Ternary Operator
    // return this.state.IsloggedIn ? (
    //   <div>Welcome Venkatesh</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Method -4 Using short circuit Operator

    return this.state.isLoggedIn && <div>Welcome Venkatesh</div>;
  }
}

export default UserGreeting;
