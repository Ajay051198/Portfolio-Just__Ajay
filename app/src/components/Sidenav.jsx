import React from "react";
import "./sidenav.sass";
import {
  Twitter,
  Linkedin,
  GitHub,
  Home,
  User,
  Terminal,
  Save,
  Briefcase,
  Mail,
} from "react-feather";

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
          <Home className="svg" />
          <div className="nav-text">HOME</div>
        </div>

        <div
          className="nav-button"
          onClick={() => {
            history.push("/about");
          }}
        >
          <User className="svg" />
          <div className="nav-text">ABOUT</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/skills");
          }}
        >
          <Terminal className="svg" />
          <div className="nav-text">SKILLS</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/projects");
          }}
        >
          <Save className="svg" />
          <div className="nav-text">PROJECTS</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/experience");
          }}
        >
          <Briefcase className="svg" />
          <div className="nav-text">EXP</div>
        </div>
        <div
          className="nav-button"
          onClick={() => {
            history.push("/contact");
          }}
        >
          <Mail className="svg" />
          <div className="nav-text">CONTACT</div>
        </div>
      </div>
      <div className="link-holder">
        <div className="icon">
          <a target="_blank" href={"https://twitter.com/Just__Ajay"}>
            <Twitter className="svg" />
          </a>
          <a target="_blank" href={"https://www.linkedin.com/in/ajaykumarmudaliar/"}>
            <Linkedin className="svg" />
          </a>
          <a target="_blank" href={"https://github.com/Ajay051198"}>
            <GitHub className="svg" />
          </a>
          <br />
        </div>
      </div>
    </main>
  );
}
export default Sidenav;
