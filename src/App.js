import logo from './logo.svg';
//import Navbar from './Components/Navbar';
//import { Data } from './Data';
import Navbar from './Components/Navbar';
import './App.css';
//import cpic from './Images/c.svg';
//import javapic from './Images/java.svg';
//<img src={cpic} className="App-C" alt="c" />
//<img src={javapic} className="App-java" alt="java" />
/*<body className='App-Skills'>
<p>
  Skills:
</p>
</body>
*/



/*function DisplayItems() {
  return Data.map(skill => (
    <li key={skill.id}>
      <img
        src={skill.image.props.src} // Access the image source properly
        alt={skill.name}
      />
    </li>
  ));
}
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
