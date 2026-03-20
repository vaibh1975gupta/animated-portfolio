import React from "react";
import "./Home.css";
import vaibhav1 from "../../assets/vaibhav1.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".home-badge", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    })
      .from(".home-name", {
        y: 60,
        opacity: 0,
        duration: 1,
      })
      .from(".home-role", {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
      .from(".home-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
      .from(".home-buttons", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
      .from(".home-image-wrapper", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
      });
  });

  return (
    <section id="home">
      <div className="home-left">
        <div className="home-content">
          <p className="home-badge">Hello, I’m</p>

          <h1 className="home-name">
            <span>VAIBHAV</span> GUPTA
          </h1>

          <h2 className="home-role">
            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "PROBLEM SOLVER"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>

          <p className="home-desc">
            I build responsive, modern, and user-friendly web applications.
            I’m passionate about MERN stack development, Java, and solving DSA
            problems while continuously improving my development skills.
          </p>

          <div className="home-buttons">
            <a href="#contact" className="primary-btn">
              Hire Me
            </a>
            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="home-right">
        <div className="home-image-wrapper">
          <img src={vaibhav1} alt="Vaibhav Gupta" />
        </div>
      </div>
    </section>
  );
}

export default Home;