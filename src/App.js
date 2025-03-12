import React from "react";
import "./App.css";
import home from "./components/Home/home";
import about from "./components/About/about";
import sidebar from "./components/Sidebar/sidebar";
import services from "./components/Services/services";
import blog from "./components/Blog/blog";
import contact from "./components/Contact/contact";
import portfolio from "./components/Portfolio/portfolio";
import resume from "./components/Resume/resume";

const App = () => {
  return (
    <>
      <sidebar />
      <main className="main">
        <home />
        <about />
        <services />
        <portfolio />
        <blog />
        <contact />
      </main>
    </>
  );
};

export default App;
