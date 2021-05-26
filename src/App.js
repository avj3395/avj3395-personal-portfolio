import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Services />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
