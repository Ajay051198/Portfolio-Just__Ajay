import React, { useState, useEffect } from "react";
import "./contact.sass";
import Loader from "./Loader";
import {
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  PhoneCall,
  MessageCircle,
} from "react-feather";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="contact">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="heading">Contact Me</div>
          <div className="tagline">
            If you'd like to talk about any of our shared interests, one of my
            projects or have an exciting new oppurtunity for me, ping me on any
            one of these platforms!
          </div>
          <br />
          <div className="platform">
            <Twitter className="svg" />
            <a target="_blank" href="https://twitter.com/Just__Ajay">
              {" "}
              @ Just__Ajay
            </a>
          </div>
          <div className="platform">
            <Linkedin className="svg" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ajaykumarmudaliar/"
            >
              {" "}
              @ ajaykumarmudaliar
            </a>
          </div>
          <div className="platform">
            <Mail className="svg" />
            <a> > ajay.selvamk@gmail.com</a>
          </div>
          <div className="platform">
            <PhoneCall className="svg" />
            <a> > +91 87-545-44666</a>
          </div>
          <div className="platform">
            <Mail className="svg" />
            <a> > +1 236-978-0599</a>
          </div>
          <div className="platform">
            <MessageCircle className="svg" />
            <a
              target="_blank"
              href="https://www.instagram.com/notyourusuallifeoperator/"
            >
              {" "}
              @ notyourusuallifeoperator
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;
