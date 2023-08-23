import React from "react";
import ContactMeForm from "./ContactMe";
import SocialButtons from "./SocialButton";
import "./Footer.css";

/**
 * Renders the footer component at the bottom of the webpage.
 *
 * The `Footer` component displays the footer section of the webpage, which includes a contact form
 * and social media buttons. It is intended to provide users with a way to get in touch with the
 * website owner and access their social media profiles.
 *
 * @returns {JSX.Element} The Footer component.
 */
function Footer() {
  return (
    <footer className="Footer">
      {/* Renders the contact form */}
      <ContactMeForm />
      
      {/* Renders the social media buttons */}
      <SocialButtons />
    </footer>
  );
}

export default Footer;
