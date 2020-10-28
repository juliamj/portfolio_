import React from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import './styles/App.css';
import './styles/Nav.css';
import './styles/About.css';
import './styles/Skills.css';
import './styles/Portfolio.css';
import './styles/Contact.css';
import './styles/Footer.css';

function App() {
  return (
    <div className="App">
        {/* <Nav /> */}
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
