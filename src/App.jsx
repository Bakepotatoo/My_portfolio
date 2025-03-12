import { React, useState } from "react";
import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Sidebar from "./components/Sidebar/sidebar";
import Services from "./components/Services/services";
import Blog from "./components/Blog/blog";
import Contact from "./components/Contact/contact";
import Portfolio from "./components/Portfolio/portfolio";
import Resume from "./components/Resume/resume";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;
