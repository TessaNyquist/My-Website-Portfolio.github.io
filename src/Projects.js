import React from "react";
import calculatorpic from "./Images/modified-calculator.png";
import github from "./Images/icons8-github.svg";
import "./Projects.css";

function ProjectCard({ title, description, iframeSrc, githubUrl }) {
  return (
    <div className="project">
      {/*<*/}
      <div className="project-iframe">
        <iframe title={title} src={iframeSrc} frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-button">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <button className="github-button">
            <img src={github} alt="GitHub" className="github-icon" />
            View on GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Calculator Project",
      description:
        "Background: I wanted to gsin more knowledge about React. So, I decided to work on a smaller project with guided instructions. I followed a tutorial on building a calculator using React, which allowed me to gain a deeper understanding of setting up a React application and leveraging its functionalities such as states and props. I deviated from the tutorial and further customized the calculator's colors and incorporated additional features like square root and exponent function. For reference, you can access the tutorial I followed at the following link:",
      iframeSrc: { calculatorpic },
      githubUrl: "https://github.com/your-github-repo-url"
    },
    { 
      title: "Orginal Web Portfolio",
      description:
        "Background: I developed this website to gain practical experience in web design and coding. Through working with HTML, CSS, and JavaScript, I've honed my skills and learned to create engaging user interfaces. As I progress, I'm adding more features like a blog and contact page to make this platform even more versatile and functional.",
      iframeSrc: "https://tessanyquist.github.io/Project_Website.github.io/index.html",
      githubUrl: "https://github.com/TessaNyquist/Project_Website.github.io"
    }
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          iframeSrc={project.iframeSrc}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}

export default Projects;
