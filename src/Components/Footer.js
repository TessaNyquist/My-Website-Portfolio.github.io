// Footer.js

import React from "react";
import ContactMeForm from "./ContactMe";
import SocialButtons from "./SocialButton";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <ContactMeForm />
      <SocialButtons />
    </footer>
  );
}

export default Footer;
