import About from "./compoments/About";
import React from "react";
import Home from "./compoments/Home";
import Navbar from "./compoments/Navbar";
import Skills from "./compoments/Skills";
import Work from "./compoments/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
