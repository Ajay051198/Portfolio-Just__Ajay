import React from "react";
import "./sidenav.sass";
import Twitter from "../assets/icons/twitter.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Github from "../assets/icons/github.svg";
import Home from "../assets/icons/home.svg";
import About from "../assets/icons/user.svg";
import Skills from "../assets/icons/terminal.svg";
import Projects from "../assets/icons/save.svg";
import Experience from "../assets/icons/briefcase.svg";
import Contact from "../assets/icons/mail.svg";

function Sidenav() {
  return (
    <main className="sidenav">
      <div className="brand">
        <div className="logo">AJ</div>
        <div className="name">Ajay</div>
      </div>
      <div className="nav-holder">
        <img src={Home} alt="Home" />
        <img src={About} alt="About" />
        <img src={Skills} alt="Skills" />
        <img src={Projects} alt="Projects" />
        <img src={Experience} alt="Experience" />
        <img src={Contact} alt="Contact" />
      </div>
      <div className="link-holder">
        <div className="icon">
          <img src={Twitter} alt="Twitter" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Github} alt="Github" />
          <br />
        </div>
      </div>
    </main>
  );
}
export default Sidenav;
