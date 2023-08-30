import React from "react";
import Header from "./Header";
import Images from "./Images";
import Content from "./Content";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
    <Header/>
    <Images/>
    <Content/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
