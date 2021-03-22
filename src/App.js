import React from "react";
import Jumbotron from "./sections/Jumbotron";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skillset from "./sections/Skillset";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="App">
      <Jumbotron />
      <About />
      <Skillset />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
