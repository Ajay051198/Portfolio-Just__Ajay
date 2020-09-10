import React, { useState, useEffect } from "react";
import "./contact.sass";
import Loader from "./Loader";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="contact">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="heading">Contact Me</div>
          
        </div>
      )}
    </main>
  );
}

export default Contact;
