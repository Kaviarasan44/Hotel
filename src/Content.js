import React from "react";
import "./Content.css";
import burger from "./images/burger.jpg";

const Content = () => {
  return (
    <div id="Content">
      <div>
        <h2 id="head">Home</h2>
      </div>
      <div className="homesection">
        <div className="home_para">
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            omnis iste eum eaque sed, neque adipisci fugiat. Ullam a possimus
            eaque exercitationem porro, aspernatur sequi. Soluta minima corporis
            dolorum laudantium, beatae, cupiditate explicabo vitae iusto
            aspernatur molestias blanditiis, illum voluptatem dolor a dolores.
            Rerum tempore quo autem labore, incidunt at doloremque repellendus
            culpa placeat quae dolores optio itaque repudiandae deleniti fugiat
            numquam maiores, sapiente necessitatibus. Exercitationem
            perferendis, sint, dignissimos perspiciatis enim id at temporibus,
            fugiat.
          </p>
          <br />

          <q>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            deleniti!
          </q>

          <br />
          <p className="para">
            Maxime dolorem ea eius eos soluta. Laudantium voluptates incidunt
            ipsa quia, tempora, tempore saepe officia porro nemo, rerum ratione
            ipsum! Laboriosam animi nisi dicta voluptates! Expedita, earum. Quia
            voluptatum architecto itaque saepe, minus veniam libero, iure eius
            officiis cumque modi tempore dolorem mollitia sed animi veritatis
            expedita aliquid enim odit magni dolores provident debitis tempora
            id. Officia et debitis ipsa repudiandae reprehenderit? Deserunt
            mollitia dolorum corporis sed fugiat laudantium! Ullam, voluptatem
            consequuntur!
          </p>
          <br />

          <q>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            deleniti!
          </q>

          <br />
          <p className="para">
            Maxime dolorem ea eius eos soluta. Laudantium voluptates incidunt
            ipsa quia, tempora, tempore saepe officia porro nemo, rerum ratione
            ipsum! Laboriosam animi nisi dicta voluptates! Expedita, earum. Quia
            voluptatum architecto itaque saepe, minus veniam libero, iure eius
            officiis cumque modi tempore dolorem mollitia sed animi veritatis
            expedita aliquid enim odit magni dolores provident debitis tempora
            id. Officia et debitis ipsa repudiandae reprehenderit? Deserunt
            mollitia dolorum corporis sed fugiat laudantium! Ullam, voluptatem
            consequuntur! Laudantium id eaque quas in a em harum vitae possimus
            culpa. Ipsum sint placeat, ente alias est repudiandae neque itaque
            ducimus, esse ullam ratione nesciunt repellendus debitis quos! Nam,
            pariatur consequuntur. Accusamus tempora alias quibusdam velit
            inventore vel eos atque aut molestias praesentium iure quae, ipsum
            qui quaerat quia esse ea eaque sapiente.
          </p>
        </div>
        <div className="burgerimage">
          <img src={burger} alt="burger" className="burger" />
        </div>
      </div>
    </div>
  );
};

export default Content;
