<<<<<<< Updated upstream
=======
import Navbar from "./Components/Navbar";
>>>>>>> Stashed changes
import AboutMe from "./Components/AboutMe";
import "./Home.css";
import { Data } from "./Components/Data";
import { ToolsData } from "./Components/ToolsData";
import LanguageGrid from "./Components/LanguageGrid";
<<<<<<< Updated upstream
=======
import Footer from "./Components/Footer";
>>>>>>> Stashed changes
//import ContactMeForm from "./Components/ContactMe";

function App() {
  return (
      <div className="App">
<<<<<<< Updated upstream
=======
        <Navbar />
>>>>>>> Stashed changes
        <AboutMe />
        <header className="App-header">
          <p className="skillsTitle"> Languages/Frameworks</p>
          <LanguageGrid className="LanguageGrid" data={Data} />
          <p className="skillsTitle"> Tools</p>
          <LanguageGrid className="LanguageGrid" data={ToolsData} />
        </header>
<<<<<<< Updated upstream
=======
        <footer className="App-footer">
          <Footer />
        </footer>
>>>>>>> Stashed changes
      </div>
  );
}

export default App;
