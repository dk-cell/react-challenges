import React from "react";
import "../css/Home.css";
import { projects } from "../data/Project";
const Home = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>React Project Challenges</h1>
        <p>
          Explore my React-based projects and challenges. Click on any project
          to explore!
        </p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.url} className="view-project">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
