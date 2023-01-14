import Homepage from "./Components/Homepage";
import MobileHomepage from "./Components/MobileHomepage";
import React from "react";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import ProjectsHeader from "./Components/ProjectsHeader";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="d-none d-lg-block">
        <Homepage />
      </div>

      <div className="d-lg-none">
        <MobileHomepage />
      </div>

      <About />
      <ProjectsHeader />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
