import vsco from '../Images/visual-studio-code.svg';
import atlassian_jira from '../Images/atlassian_jira-icon.svg';
import github from '../Images/icons8-github.svg';


export const ToolsData = [
    {
      id: 1,
      image: <img src={vsco} className="vsco" alt="vsco" />,
      name: "vsco",
      className: "vsco" // Add a className property
    },
    {
      id: 2,
      image: <img src={atlassian_jira} className="atlassian_jira" alt="atlassian_jira" />,
      name: "atlassian_jira",
      className: "atlassian_jira" // Add a className property
    },
    {
      id: 3,
      image: <img src={github} className="github" alt="github" />,
      name: "github",
      className: "github" // Add a className property
    },
  ];
  