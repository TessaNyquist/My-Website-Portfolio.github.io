import React from "react";
import "./ContactMe.css";

/**
 * Renders a contact form component that allows users to send messages to the website owner.
 *
 * The component provides a form with fields for the user to input their first name, last name,
 * email, and message. When the user submits the form, the data is sent to the specified
 * Formspree endpoint for processing.
 *
 * @returns {JSX.Element} The ContactMeForm component.
 */
function ContactMeForm() {
  return (
    <div className="contact-me-container">
      <form
        className="contact-me-form"
        action="https://formspree.io/f/mqkvqkkr"
        method="POST"
      >
        <h2 className="contact-me-heading">Contact Me</h2>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="First Name"
              placeholder="First Name"
              className="larger-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="Last Name"
              placeholder="Last Name"
              className="larger-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="Email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="Message" placeholder="Enter message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMeForm;
