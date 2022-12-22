import React from "react";

const Greet = ({ name, heroName }) => {
  return (
    <React.Fragment>
      <div>
        <h1>
          Hello {name} a.k.a {heroName}{" "}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Greet;
