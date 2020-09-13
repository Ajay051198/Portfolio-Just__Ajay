import React, { useState, useEffect } from "react";
import "./about.sass";
import Loader from "./Loader";

function About() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="aboutme">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="heading">About Me</div>
          <div className="text">
            <strong>Hi!</strong> I'm <span className="accent">Ajay</span> from
            India. I have completed my undergraduate in mechatronics engineering
            from
            <span className="white"> University of Manchester</span>, UK and I’m
            currently pursuing my masters in mechatronics design at{" "}
            <span className="white">University of British Columbia</span>,
            Canada. I’m practising to be an AI developer with most of my work
            focused on machine learning, data science and IoT systems. My time
            spent not writing code is spent consuming non-fiction books,
            podcasts (huge fan of Joe Rogan) or working out in the gym. I also
            develop websites to fuel my creative side. Midway through my
            masters, fascinated by the value of data I decided to dive deeper
            into data science concepts and subsequently discovered machine
            learning and deep learning. Wanting to explore further, I completed
            reputed courses by <span className="white">IBM</span> and{" "}
            <span className="white">Deeplearning.ai</span>, pursued projects and
            took up my master’s research in “deep learning in IoT systems”.
            Alongside my research, I’m also interning as a data scientist in
            NextGenOps DS Team at <span className="white">Jio</span> Platforms
            Ltd. Once I discovered my interest in data and AI, I decided to
            pursue it as my career.{" "}
            <span className="white"> Graduating Dec'2020</span>, I’m looking
            forward to start my career and contribute back to the AI community.
          </div>
        </div>
      )}
    </main>
  );
}

export default About;
