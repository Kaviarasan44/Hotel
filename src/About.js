import React from "react";
import "./About.css";
import tea from './images/tea.jpg';

const About = () => {
  return (
    <div id="About">
       <div><h2 id="head">About us</h2></div>

    <div className="aboutsection">

      <div className="teaimage">
        <img src={tea} alt="tea" className="tea"/>
      </div>
      
      <div className="about_para" >
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        aspernatur laborum? Suscipit, facere. Odio mollitia, a voluptates dicta
        fuga, aperiam incidunt facilis ea saepe libero commodi laboriosam
        deserunt esse repellat eaque veniam modi dolorum! Iusto culpa veniam,
        provident, deserunt quibusdam voluptatem ut maiores recusandae qui
        blanditiis cupiditate nobis. At, laboriosam!
      </p>
      <br />
      <q>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, deleniti!</q>
      <br />

      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        voluptas aperiam distinctio sed quo dolores, sint quibusdam nam commodi
        quasi!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        voluptas aperiam distinctio sed quo dolores, sint quibusdam nam commodi
        quasi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        voluptas aperiam distinctio sed quo dolores, sint quibusdam nam commodi
        quasi!
      </p>
      </div>
    </div>
    </div>
  );
};

export default About;
