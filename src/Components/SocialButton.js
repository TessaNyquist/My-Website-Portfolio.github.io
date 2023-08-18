import React from "react";
import "./SocialButtons.css";

function SocialButtons() {
  return (
    <div>
      <a
        className="LinkedInButton"
        href="https://www.linkedin.com/in/tessa-nyquist/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="GithubButton"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
export default SocialButtons;
