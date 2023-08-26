import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h2 id="head">Contact us</h2>
      </div>
      <div className="form">
        <form action="">
          <label htmlFor="">
            Name <br />
            <input type="text" />
          </label>
          <br />
          <label htmlFor="">
            Place <br />
            <input type="text" />
            <br />
          </label>
          <label htmlFor="">
            E-mail <br />
            <input type="mail" />
          </label>
          <br />
          <label htmlFor="">
            Phone Number
            <br />
            <input type="number" />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
