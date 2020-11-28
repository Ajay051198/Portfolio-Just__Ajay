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
      bullets: [
        "Working with the NextGenOps DS team to provides AI solutions to decrease downtime with the help of system log data to automatically detect and provide resolutions for managing 300+ Jio applications.",
        " Implementation of the LogMine 2016 paper to automate the general pattern detection process (clustering followed by pattern recognition) in system log data and to do so efficiently and fast",
      ],
    },
    {
      position: "Cloud Resource Migration Shadow",
      company: "@ Vodafone, July 2018 > Aug 2018",
      bullets: [
        "Shadowing and assisting representatives during migration of Vodafone cloud infrastructure.",
      ],
    },
  ];

  const certs = [
    {
      certificate: "Deep Learning Specialization",
      org: "deeplearning.ai",
      link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/NE3WBD7CSXTN",
    },
    {
      certificate: "Data Scienc Specialization",
      org: "IBM",
      link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/TGQCH8H7777B",
    },
    {
      certificate: "Tensorflow in Practice Specialization",
      org: "deeplearning.ai",
      link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/3TF4XU4NVXPS",
    },
    {
      certificate: "Watson and Cloud Foundations",
      org: "IBM",
      link:
        "https://www.youracclaim.com/badges/9ee43a36-c88b-4dd5-8bce-ce3a856dcf75/linked_in_profile",
    },
  ];
  return (
    <main className="experience">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="heading">Work Experience & Certificates</div>
          <div className="tagline"></div>

          <div className="sub-title">Experience</div>
          {we.map(({ position, company, bullets }) => (
            <div className="exp">
              <div className="position">{position}</div>
              <div className="company">{company}</div>
              {bullets.map((point) => (
                <div className="brief">{point}</div>
              ))}
            </div>
          ))}
          <div className="sub-title">Certiciates</div>
          {certs.map(({ certificate, org, link }) => (
            <a className="certs" href={link} target="_blank">
              <span className="cert">{certificate}</span>
              <span className="org">{org}</span>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}

export default Experience;
