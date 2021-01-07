import React, { useEffect, useState } from "react";
import "./projects.sass";
import Loader from "./Loader";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const projects = [
    {
      name: "FractalHub ",
      about: "Passion Project, Jul 2020 > Present",
      desc:
        "Leading an web and app development team of 6 to create a productivity tool box application for the public. This consists of an smart planner/task manager and an interactive user-based collection manager for online resources.",
      tools: "Flutter, Firebase, Django Backend, DRF API, React Js Frontend, HTML, SASS",
    },
    {
      name: "Car Health Monitor, Software Design Project",
      about: "@University of British Columbia, Jan 2020 > April 2020",

      desc:
        "A tune-able car health monitoring system which notifies the user when the car needs maintenance along with the predicted maintenance cost via email. This is paired with a simulator of the car’s sensors to present and test the application.",
      tools: " Python,  Tkinter GUI,  AMQP (Rabbit MQ)",
    },
    {
      name: "Smart Blinds, Mechatronics Product Design",
      about: "@University of British Columbia, Sep 2019 > Dec 2019",

      desc:
        "A Smart Blind system integrated with Amazon Alexa designed to be capable of moving the roller shade up or down automatically by using Alexa voice commands or have it moved based on ambient light levels.",
      tools: " MSP430,  Raspberry Pi,  Alexa API,  Stepper Motors",
    },
    {
      name: "Swarming behavior in Robocone ecosystem, Final Year Project",
      about: "@University of Manchester, Sep 2018 > April 2019",

      desc:
        "Implementation of an IoT network within a robotic traffic cone   system so that the system can demonstrate swarm behaviour and will navigate its ecosystem consciously while communicating with one another",
      tools: " Arduino,  ZigBee,  MATLAB Simulations,  Path planning",
    },
  ];
  return (
    <main className="projects">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="heading">Projects & Research</div>
          <div className="tagline">
            " A combination of course based projects and projects pursued to
            feed my curiosity "
          </div>
          <div className="container">
            <div className="type">~./Research</div>
            <div className="project">
              <div className="title">
                <div className="name">
                  Deep Learning in IoT Systems (Master's Research)
                </div>
                <div className="about">
                  @ University of Briitsh Columbia, Aug 2020 > Present
                </div>
              </div>

              <ul className="details">
                <li className="desc">
                  <strong>Analysis and Testing: </strong>
                  Evaluation of using LSTMs networks in HAR over other machine
                  learning techniques by testing 3 LSTM networks of increasing
                  complexity over 2 datasets
                </li>
                <li className="desc">
                  <strong>Design: </strong>
                  Suggested a way to deal with edge case and proposed an
                  architecture to implement the system in union to existing
                  architecture for application in assisted living areas.
                </li>
              </ul>
            </div>

            <div className="type c1">~./Projects</div>
            {projects.map(({ name, about, desc, tools }) => (
              <div className="project">
                <div className="title">
                  <div className="name">{name}</div>
                  <div className="about">{about}</div>
                </div>
                <ul className="details">
                  <li className="desc">
                    <strong>Description: </strong>
                    {desc}
                  </li>
                  <li className="tools">
                    <strong>Tools: </strong>
                    {tools}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
