import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";

function About() {
  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-top">
          <p className="about-subtitle">GET TO KNOW MORE</p>
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            I am Vaibhav Gupta, a Computer Science student and an aspiring
            full-stack developer. I enjoy building responsive and user-friendly
            web applications, solving DSA problems, and improving my Java
            programming skills. I am passionate about learning modern
            technologies and creating impactful digital experiences.
          </p>
        </div>

        <div className="about-grid">
          <div className="left-column">
            <div className="detail-row">
              <div className="timeline-col">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="info-card">
                <h2>Personal Info</h2>
                <ul>
                  <li><span>Name:</span> Vaibhav Gupta</li>
                  <li><span>Age:</span> 20 Years</li>
                  <li><span>Gender:</span> Male</li>
                  <li><span>Languages:</span> Hindi, English</li>
                </ul>
              </div>
            </div>

            <div className="detail-row">
              <div className="timeline-col">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="info-card">
                <h2>Education</h2>
                <ul>
                  <li><span>Degree:</span> B.Tech</li>
                  <li><span>Branch:</span> Computer Science</li>
                  <li><span>CGPA:</span> 7.5</li>
                </ul>
              </div>
            </div>

            <div className="detail-row">
              <div className="timeline-col">
                <div className="timeline-dot"></div>
              </div>

              <div className="info-card">
                <h2>Skills</h2>
                <ul>
                  <li>MERN Stack Web Development</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Java Programming</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="card-row">
              <Card title="MERN STACK" image={mern} />
            </div>
            <div className="card-row">
              <Card title="DSA" image={dsa} />
            </div>
            <div className="card-row">
              <Card title="JAVA" image={java} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;