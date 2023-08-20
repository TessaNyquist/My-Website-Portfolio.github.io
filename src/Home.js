import AboutMe from "./Components/AboutMe";
//import ResumePdf from "./Images/Software-Developer-Résumé.pdf";
import "./Home.css";
import { Data } from "./Components/Data";
import { ToolsData } from "./Components/ToolsData";
import LanguageGrid from "./Components/LanguageGrid";
import Accordion from "./Components/Accordion";
import SocialButtons from "./Components/SocialButton";
//import ContactMeForm from "./Components/ContactMe";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Accordion className="Accordian" />
      <div className="button-row">
        <SocialButtons />
      </div>
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
