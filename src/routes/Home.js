import React from "react";
import { Link } from "react-router-dom";
import Skill from "../components/Skill";
import School from "../components/School";
import Work from "../components/Work";

function Home() {
  return (
    <main className="main">
      <h1 className="title">Xuanwen Zheng's Portfolio</h1>

      <h2 className="hidden">Contents</h2>

      <div className="objects-container">
        <div className="object-item">
          <img
            src="images/aboutme.png"
            alt="Laptop and coffee cup on table"
            width="390"
          />

          <h3 className="object-title">About Me</h3>

          <div className="object-content">
            <p>
              A <strong>Full-Stack Web Developer</strong> experienced in
              building multi-tier architecture for{" "}
              <strong>RESTful Web services</strong>, with strong experience in{" "}
              <strong>Object-Oriented Programming</strong>,
              <strong>Computer Science Fundamentals</strong>, and{" "}
              <strong>Algorithm Data structure</strong>.
            </p>

            <p>
              An <strong>optimistic</strong>, <strong>motivated</strong>, and{" "}
              <strong>responsible</strong> team worker, developed by determining
              work ethic and self-learning with good communication skills and
              technical abilities.
            </p>

            <p>
              Experienced working on developing{" "}
              <strong>Single Page/Multiple Pages</strong> Web Applications.
            </p>
          </div>
        </div>
      </div>

      <h2 className="secondary-title">Skills</h2>
      {/* call Skill component to display skills info */}
      <Skill />
      <h2 className="secondary-title">Educations</h2>
      {/* call School component to display educations info */}
      <School />
      <h2 className="secondary-title">Work Experience</h2>
      {/* call Work component to display work experience info */}
      <Work />
    </main>
  );
}
export default Home;
