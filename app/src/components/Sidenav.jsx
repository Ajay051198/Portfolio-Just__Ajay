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

import { useHistory } from "react-router-dom";

function Sidenav() {
  let history = useHistory();
  return (
    <main className="sidenav">
      <div className="brand">
        <div className="logo">AJ</div>
        <div className="logoshadow">AJ</div>
        <div className="name">Ajay</div>
      </div>
      <div className="nav-holder">
        <div
          className="nav-button"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={Home} alt="Home" />
          <div className="nav-text">HOME</div>
        </div>

        <div
          className="nav-button"
          onClick={() => {
            history.push("/about");
          }}
        >
          <img src={About} alt="About" />
          <div className="nav-text">ABOUT</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/skills");
          }}
        >
          <img src={Skills} alt="Skills" />
          <div className="nav-text">SKILLS</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/projects");
          }}
        >
          <img src={Projects} alt="Projects" />
          <div className="nav-text">PROJECTS</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/experience");
          }}
        >
          <img src={Experience} alt="Experience" />
          <div className="nav-text">EXP</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <img src={Contact} alt="Contact" />
          <div className="nav-text">CONTACT</div>
        </div>
      </div>
      <div className="link-holder">
        <div className="icon">
          <a href={"https://twitter.com/Just__Ajay"}>
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href={"https://www.linkedin.com/in/ajaykumarmudaliar/"}>
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href={"https://github.com/Ajay051198"}>
            <img src={Github} alt="Github" />
          </a>
          <br />
        </div>
      </div>
    </main>
  );
}
export default Sidenav;
