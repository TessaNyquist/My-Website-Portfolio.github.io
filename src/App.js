import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import "./App.css";
import { Data } from "./Components/Data";
import { ToolsData } from "./Components/ToolsData";
import LanguageGrid from "./Components/LanguageGrid";
import ContactMeForm from "./Components/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <header className="App-header">
        <p className="skillsTitle"> Languages/Frameworks</p>
        <LanguageGrid className="LanguageGrid" data={Data} />
        <p className="skillsTitle"> Tools</p>
        <LanguageGrid className="LanguageGrid" data={ToolsData} />
      </header>
      <body>
        <div className="footer">
          <ContactMeForm />
        </div>
      </body>
    </div>
  );
}

export default App;
