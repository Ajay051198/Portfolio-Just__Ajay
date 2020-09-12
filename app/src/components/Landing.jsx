import React from "react";
import "./landing.sass";
import { Random } from "react-animated-text";
import { useHistory } from "react-router-dom";

const Text = (text) => {
  return (
    <Random
      text={text}
      paused={false}
      iterations={1}
      effect="verticalFadeIn"
      effectChange={1}
      effectDirection="up"
    />
  );
};

function Index({ sel }) {
  let history = useHistory();
  return (
    <main className="index">
      <div className="intro-container">
        <div>{Text('“ Hello,')}</div>
        <div className="pad-left highlight">{Text("I'm Ajay, ")}</div>
        <div className="pad-left">{Text('Developer. "')}</div>
        <p className="pad-left">
          Deep Learning | Data Science | IoT | Web Development
        </p>
        <br />
        <button
          onClick={() => {
            history.push("/contact");
          }}
        >
          CONTACT ME
        </button>
      </div>
      <div className="image">
        A<span className="accent">J</span>
      </div>
    </main>
  );
}

export default Index;
