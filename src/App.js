import React from "react";
import "./App.css";
import Jumbotron from "./sections/Jumbotron";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <About />
      {/*<Portfolio />*/}
    </div>
  );
}

export default App;
