import React from "react";
import "./SocialButtons.css";
import ResumePdf from "../Images/Software-Developer-Résumé.pdf";

function SocialButtons() {
  const downloadResume = () => {
    const element = document.createElement("a");
    element.href = { ResumePdf }; // Replace with the actual path to your resume PDF
    element.download = "Software-Developer-Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div>
      <a
        className="DownloadButton"
        href={ResumePdf}
        onClick={downloadResume}
      >Résumé</a>
      <a
        className="LinkedInButton"
        href="https://www.linkedin.com/in/tessa-nyquist/"
        target="_blank"
        rel="noopener noreferrer"
      >LinkedIn</a>
      <a
        className="GithubButton"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      > GitHub</a>
    </div>
  );
}
export default SocialButtons;
