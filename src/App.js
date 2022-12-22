import logo from "./logo.svg";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import "./App.css";
import { Component } from "react";
import Message from "./components/Message";
import Counter from "./components/Counter";

// function App() {
//   return (
//     <div className="App">
//       <Greet name="Bruce" heroName="Batman">
//         <p>This is children props</p>
//       </Greet>
//       <Greet name="clark" heroName="Superman">
//         <button>button</button>
//       </Greet>

//       <Greet name="Diana" heroName="WonderWoman" />
//       {/* <Welcome />
//       <Hello /> */}
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Welcome> */}

        {/* Here props is not passed for subscribe button as props are immutabe  sol is to use state*/}
        {/* <Message /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
