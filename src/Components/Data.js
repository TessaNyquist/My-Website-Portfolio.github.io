// Data.js

import cPic from '../Images/c.svg';
import javaPic from '../Images/java.svg';
import pythonPic from '../Images/python.svg';
import logo from "../Images/logo.svg";
import sql from "../Images/sql.svg";

export const Data = [
  {
    id: 1,
    image: <img src={cPic} className="language-icon c" alt="c" />,
    name: "C",
    className: "c" // Add a className property
  },
  {
    id: 2,
    image: <img src={javaPic} className="language-icon java" alt="java" />,
    name: "java",
    className: "java" // Add a className property
  },
  {
    id: 3,
    image: <img src={pythonPic} className="language-icon python" alt="python" />,
    name: "python",
    className: "python" // Add a className property
  },
  {
    id: 4,
    image: <img src={logo} className="react" alt="react" />,
    name: "react",
    className: "react" // Add a className property
  },
  {
    id: 4,
    image: <img src={sql} className="sql" alt="sql" />,
    name: "sql",
    className: "sql" // Add a className property
  }
];
