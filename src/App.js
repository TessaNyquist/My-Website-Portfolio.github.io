import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Blog from "./Blog";
import Footer from "./Components/Footer";
import Projects from './Projects';
import Resume from './Resume';
import Blog from './Blog';
import { Data } from "./Components/Data";
import { ToolsData } from "./Components/ToolsData";
import LanguageGrid from "./Components/LanguageGrid";

function App() {
  return (
      <Router>
        <div className="App">
        <Navbar />
        <AboutMe />

        <Routes>
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
        </Routes>

        <header className="App-header">
          <p className="skillsTitle"> Languages/Frameworks</p>
          <LanguageGrid className="LanguageGrid" data={Data} />
          <p className="skillsTitle"> Tools</p>
          <LanguageGrid className="LanguageGrid" data={ToolsData} />
        </header>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
