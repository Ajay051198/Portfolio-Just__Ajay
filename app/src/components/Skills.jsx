import React, { useState } from "react";
import "./skills.sass";

function Skills() {
  const dict = {
    na: [],
    machinelearning: [
      "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg",
      "https://buzz-prod-photos.global.ssl.fastly.net/img/87a50dce-a64d-4747-b152-30f2f13e80ef",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1024px-Scikit_learn_logo_small.svg.png",
      "https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg",
    ],
    languages: [
      "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
      "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
    ],
    webdevelopment: [
      "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
      "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg",
      "https://cw-production-assetsbucket-8j84s7jns7p2.s3.amazonaws.com/media/blog-images/drf-logo2.png",
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    ],
    datascience: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1024px-NumPy_logo_2020.svg.png",
      "https://matplotlib.org/3.3.0/_static/logo2_compressed.svg",
      "https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/Seaborn-logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
    ],
    software: [
      "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg",
      "https://www.pngonly.com/wp-content/uploads/2017/06/Photoshop-CC-Logo-PNG.png",
    ],
  };
  const [skill, setSkill] = useState("na");
  return (
    <main className="skills">
      <div className="container">
        <div className="heading">Skills</div>
        <div className="topics">
          <div
            className="topic"
            onClick={() => {
              setSkill("machinelearning");
            }}
          >
            <span>Machine Learning</span>
          </div>
          <div
            className="topic"
            onClick={() => {
              setSkill("languages");
            }}
          >
            <span>Languages</span>
          </div>
          <div
            className="topic"
            onClick={() => {
              setSkill("webdevelopment");
            }}
          >
            <span>Web Development</span>
          </div>
          <div
            className="topic"
            onClick={() => {
              setSkill("datascience");
            }}
          >
            <span>Data Science</span>
          </div>
          <div
            className="topic"
            onClick={() => {
              setSkill("software");
            }}
          >
            <span>Software / Technologies</span>
          </div>
        </div>
      </div>
      <div className="detail">
        {dict[skill].map((each) => (
          <img src={each} className="skill" alt="logo" />
        ))}
      </div>
    </main>
  );
}

export default Skills;
