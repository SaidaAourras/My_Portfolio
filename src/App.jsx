import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsTechnologies from "./components/SkillsTechnologies";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <Home />

      <Education />
      <AboutMe></AboutMe>
      <Services />
      <SkillsTechnologies></SkillsTechnologies>
      <Projects />
      <Contact />
      <Footer></Footer>
    </>
  );
}

export default App;
