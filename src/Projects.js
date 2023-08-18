import React from "react";
import calculatorpic from "./Images/modified-calculator.png";
import github from "./Images/icons8-github.svg";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      {/* Calculator Project */}
      <div className="project">
        <img
          src={calculatorpic}
          alt="Calculator Project"
          className="project-image"
        />
        <div className="project-description">
          <h3>Calculator Project</h3>
          <p>
            Background: To prepare for my Asteroids spinoff project, I decided
            to enhance my knowledge of React through a smaller project with
            guided instructions. I followed a tutorial on building a calculator
            using React, which allowed me to gain a deeper understanding of
            setting up a React application and leveraging its functionalities
            such as states and props. I deviated from the tutorial and further
            customized the calculator's colors and incorporated additional
            features like square root and exponent function.
          </p>
          <p>
            For reference, you can access the tutorial I followed at the
            following link:
            <a
              href="https://www.sitepoint.com/react-tutorial-build-calculator-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calculator Tutorial
            </a>
            .
          </p>
        </div>
        <div className="project-button">
          <a
            href="https://github.com/your-github-repo-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="github-button">
              <img src={github} alt="GitHub" className="github-icon" />
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
