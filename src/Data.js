import cPic from './Images/c.svg';
import javaPic from './Images/java.svg';
import pythonPic from './Images/java.svg';



export const Data = [
  {
    id: 1,
    image: <img src={cPic} className="c" alt="c" />,
    name: "C",
  },
  {
    id: 2,
    image: <img src={javaPic} className="java" alt="java" />,
    name: "java",
  },
  {
    id: 3,
    image: <img src={pythonPic} className="python" alt="python" />,
    name: "python",
  }
];