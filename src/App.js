import Navbar from "./Components/Navbar";
//import AboutMe from "./Components/AboutMe";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Blog from "./Blog";
//import { Data } from "./Components/Data";
//import { ToolsData } from "./Components/ToolsData";
//import LanguageGrid from "./Components/LanguageGrid";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />}/>
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
