import React from "react";
import Project from "../components/Project";

function Projects() {
  return(
    <main className="main">
      <h1 className="title">Projects</h1>
      {/* call Project component to display projects info */}
      <Project />
    </main>
  )
}
export default Projects;