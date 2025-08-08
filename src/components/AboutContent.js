import React from 'react'
import "./aboutContentStyles.css"
import { Link } from 'react-router-dom'
import mern from "../assets/mern.png"
import mern2 from "../assets/mern2.png"



const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I’m a MERN stack developer passionate about building dynamic, responsive, and user-friendly web applications using Express.js, React, and Node.js.</p>
            <Link to = "/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src = {mern} className='img' alt='true'/>
                </div>
                <div className="img-stack bottom">
                    <img src = {mern2} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
