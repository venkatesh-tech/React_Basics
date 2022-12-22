import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <div>
        <h1>Hello {props.name} </h1>
        <h1>
          {props.heroName} {props.children}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Greet;
