import React from "react";
import "./Projects.css";
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import cb from "../../assets/cb.png";
import tti from "../../assets/tti.png";

function Projects() {
  const projectData = [
    {
      title: "Virtual Assistant",
      image: va,
      description:
        "An AI-based virtual assistant that helps users perform tasks through smart voice and text interaction.",
      tech: "React, JavaScript, API Integration",
    },
    {
      title: "AI Powered Fitness Website",
      image: fw,
      description:
        "A fitness platform that suggests workouts, tracks activities, and improves user experience with AI features.",
      tech: "React, CSS, AI API",
    },
    {
      title: "AI Chatbot",
      image: cb,
      description:
        "An intelligent chatbot built to answer user queries and provide fast conversational support.",
      tech: "React, Node.js, OpenAI API",
    },
    {
      title: "Text to Image",
      image: tti,
      description:
        "A web app that converts text prompts into images using AI image generation models.",
      tech: "React, API, AI Tools",
    },
  ];

  return (
    <section id="projects">
      <p className="projects-subtitle">My Work</p>
      <h1 className="projects-title">Projects</h1>
      <p className="projects-description">
        These are some of the projects I have built while learning web
        development, DSA, and AI technologies.
      </p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;