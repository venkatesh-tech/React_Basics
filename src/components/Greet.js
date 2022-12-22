import React, { Component } from "react";

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <React.Fragment>
//       <div>
//         <h1>Hello {props.name} </h1>
//         <h1>
//           {props.heroName} {props.children}
//         </h1>
//       </div>
//     </React.Fragment>
//   );
// };

class Greet extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Greet;
