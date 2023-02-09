import * as React from "react";

import ContactContainer from "./ContactContainer";

import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";

import contactbg from "../../assets/images/contactbg.jpg";

const Contact = () => {
  const [userEmail, setUserEmail] = React.useState("");

  const handleSubmit = (e) => {
    setUserEmail("");
  };

  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <ContactContainer bg={contactbg}>
      <div className="contact-overlay"></div>
      <div className="contact-inner">
        <div className="contact-newsletter">
          <h3>Subscribe to our monthly newsletter</h3>
          <div>
            <input
              value={userEmail}
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            ></input>
            <button
              className="contact-newsletter__button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="contact-socials">
          <Mail />
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </ContactContainer>
  );
};


export default Contact;
