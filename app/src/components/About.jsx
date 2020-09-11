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
        </div>
      )}
    </main>
  );
}

export default About;
