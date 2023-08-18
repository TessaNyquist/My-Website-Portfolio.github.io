import React from "react";
import ResumePdf from "./Images/Software-Developer-Résumé.pdf";
import "./Resume.css"; // Import the corresponding CSS file

function Resume() {
  const downloadResume = () => {
    const element = document.createElement("a");
    element.href = ResumePdf;
    element.download = "Software-Developer-Resume.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    <div classname="resume">
      <h1>My Résumé</h1>
      <div classname="resume-pdf">
        <iframe src={ResumePdf} title="My Resume"></iframe>
      </div>
      {/* Display the PDF using an iframe */}
      <button className="download-button" onClick={downloadResume}>
        Download My Résumé
      </button>
    </div>
  );
}

export default Resume;
