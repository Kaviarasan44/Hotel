import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <div>
        <h2 id="head">Contact us</h2>
      </div>
      <div className="FormSection">
        <div className="form">
        <form action="">
          <label htmlFor="">
            Name <br />
            <input type="text" className="input" required/>
          </label>{" "}
          <br />
          <label htmlFor="">
            Place <br />
            <input type="text" className="input" required/>
          </label>{" "}
          <br />
          <label htmlFor="">
            E-mail <br />
            <input type="mail" className="input" required/>
          </label>{" "}
          <br />
          <label htmlFor="">
            Phone <br />
            <input type="number" className="input" required minLength={6} maxLength={10} />
          </label>{" "}
          <br />
          <input type="submit" className="btn" />
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
