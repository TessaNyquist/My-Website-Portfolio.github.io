//import logo from "./logo.svg";
//import Navbar from './Components/Navbar';
//import { Data } from './Data';
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import "./App.css";
import { Data } from './Components/Data';
import { ToolsData } from './Components/ToolsData';
import LanguageGrid from './Components/LanguageGrid';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <header className="App-header">
      <p>Languages</p>
      <LanguageGrid className="LanguageGrid" data={Data} />
      <p>Tools</p>
      <LanguageGrid className="LanguageGrid" data={ToolsData} />
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
