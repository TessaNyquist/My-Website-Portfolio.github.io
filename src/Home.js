import AboutMe from "./Components/AboutMe";
import "./Home.css";
import { Data } from "./Components/Data";
import { ToolsData } from "./Components/ToolsData";
import LanguageGrid from "./Components/LanguageGrid";
//import ContactMeForm from "./Components/ContactMe";

function App() {
  return (
      <div className="App">
        <AboutMe />
        <header className="App-header">
          <p className="skillsTitle"> Languages/Frameworks</p>
          <LanguageGrid className="LanguageGrid" data={Data} />
          <p className="skillsTitle"> Tools</p>
          <LanguageGrid className="LanguageGrid" data={ToolsData} />
        </header>
      </div>
  );
}

export default App;
