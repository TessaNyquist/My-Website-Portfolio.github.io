import AboutMe from "./Components/AboutMe";
import ResumePdf from "./Images/Software-Developer-Résumé.pdf";
import "./Home.css";
import { Data } from "./Components/Data";
import { ToolsData } from "./Components/ToolsData";
import LanguageGrid from "./Components/LanguageGrid";
import Accordion from "./Components/Accordion";
//import ContactMeForm from "./Components/ContactMe";

function App() {
  const downloadResume = () => {
    const element = document.createElement("a");
    element.href = ResumePdf;
    element.download = "Software-Developer-Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div className="App">
      <AboutMe />
      <Accordion className="Accordian" />
      <div className="button-row">
        <button className="home-button" onClick={downloadResume}>
          Download Résumé
        </button>
        <a
          href="https://www.linkedin.com/in/tessa-nyquist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="home-button">LinkedIn</button>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="home-button">GitHub</button>
        </a>
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
