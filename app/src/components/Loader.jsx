import React from "react";
import "./loader.sass";

function Loader() {
  return (
    <main className="loader">
      <div className="text">
        <div className="image">
          A<span className="accent">J</span>
        </div>
      </div>
      <div className="box">
        <div className="percentage" />
      </div>
    </main>
  );
}

export default Loader;
