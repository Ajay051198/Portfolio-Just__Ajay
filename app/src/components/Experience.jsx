import React, { useEffect, useState } from "react";
import "./experience.sass";
import Loader from "./Loader";

function Experience() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const we = [
    {
      position: "Data Science Intern",
      company: "@ Jio, Sept 2020 > Present",
      brief: "lorem ipsum buddy",
    },
    {
      position: "Cloud Resource Migration Shadow",
      company: "@ Vodafone, July 2018 > Aug 2018",
      brief:
        "Shadowing and assisting representatives during migration of Vodafone cloud infrastructure",
    },
  ];
  return (
    <main className="experience">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="heading">Work Experience</div>
          <div className="tagline">" It aint much, but its honest work "</div>
          {we.map(({ position, company, brief }) => (
            <div className="exp">
              <div className="position">{position}</div>
              <div className="company">{company}</div>
              <div className="brief">{brief}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Experience;
