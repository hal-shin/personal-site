import React from "react";
import "./App.css";
import Jumbotron from "./sections/Jumbotron";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skillset from "./sections/Skillset";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <About />
      <Skillset />
      {/*<Portfolio />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
