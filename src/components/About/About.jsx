import React from 'react'
import "./About.css"
import Card from "../Card/Card"
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
function About() {
  return (
    <div id="about">
     <div className="leftabout">
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
       <div className="aboutdetails">
        <div className="personalinfo">
           <h1>Personal Info</h1>
           <ul>
            <li>
        <span>NAME</span> : VAIBHAV GUPTA
            </li>
           <li>
        <span>AGE</span>: 20 YEARS
            </li>
            <li>
        <span>GENDER</span>: MALE
            </li>
           <li>
        <span>LANGUAGE</span>: HINDI,ENGLISH
            </li>
           </ul>

        </div>
         <div className="education">
           <h1>EDUCATION</h1>
           <ul>
            <li>
        <span>Degree</span> :B-tech
            </li>
           <li>
        <span>Branch</span> :Computer Science
            </li>
            <li>
        <span>CGPA</span> :7.5
            </li>
           
           </ul>

        </div>
         <div className="skills">
           <h1>Skills</h1>
           <ul>
            <li>
          MERN STACK WEB DEVELOPER
            </li>
           <li>
             DSA
            </li>
            <li>
        JAVA
            </li>
           
           </ul>

        </div>
       </div>
     </div>
     
      <div className="rightabout">
          <Card title="MERN STACK" image={mern}/>
          <Card title="DSA" image={dsa}/>
          <Card title="JAVA" image={java}/> 
      </div>

    </div>
  )
}

export default About