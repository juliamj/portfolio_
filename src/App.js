import React from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import './styles/App.css';
import './styles/Nav.css';
import './styles/About.css';
import './styles/Skills.css';
import './styles/Portfolio.css';
import './styles/Contact.css';

function App() {
  return (
    <div className="App">
        <Nav />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
    </div>
  );
}

export default App;
