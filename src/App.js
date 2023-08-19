import Navbar from "./Components/Navbar";
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
          <Route path="My-Website-Portfolio.github.io" element={<Home />} />
          <Route path="My-Website-Portfolio.github.io/Home" element={<Home />}/>
          <Route path="My-Website-Portfolio.github.io/Projects" element={<Projects />} />
          <Route path="My-Website-Portfolio.github.io/resume" element={<Resume />}/>
          <Route path="My-Website-Portfolio.github.io/blog" element={<Blog />} />
        </Routes>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
