import React from "react";
import "./ContactMe.css";

/**
 * This method currently outlines the ContactMe method at the bottom of my webpage.
 *
 * @returns
 */
function ContactMeForm() {
  return (
    <div className="contact-me-container">
      <form className="contact-me-form">
        <h2 className="contact-me-heading">Contact Me</h2>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" placeholder="First Name" className="larger-input"/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" placeholder="Last Name" className="larger-input"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Enter message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMeForm;
