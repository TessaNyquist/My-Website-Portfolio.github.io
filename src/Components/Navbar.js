import React from 'react';

/**
 * 
 * @returns 
 */
function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">My Portfolio</div>
        <div className="navbar-items">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>
    );
  }

  export default Navbar;
