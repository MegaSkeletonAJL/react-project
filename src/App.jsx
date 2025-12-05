import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Faculty from "./components/Faculty/Faculty";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Obtain knowledge in these fields" />
        <Programs />
      </div>
      <div className="container">
        <Title subTitle="About Us" />
        <About />
      </div>
      <div className="container">
        <Title subTitle="Faculty" />
        <Faculty />
      </div>
      <div className="container">
        <Title subTitle="Contact" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
