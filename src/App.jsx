import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
    <body className="background-image">
      <body className="shooting-star">
      <NavBar type="navbar-list" contentType="navbar--content"/>
      <AboutMe />
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      </body>
    </body>
    </>
  );
}

export default App;
