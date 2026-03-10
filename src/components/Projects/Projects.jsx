import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
function Projects() {
  return (
    <div id="projects">
      <h1 id ="para">2+ years experience in Projects</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="AI Powered fitness website" image={fw}/>
        <Card title="AI chatbot" image={cb}/>
        <Card title="Text to Image" image={tti}/>
        
      </div>
    </div>
  )
}
export default Projects