import React from 'react';
import "./HeroimgStyles.css";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='intro-img' src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'M ABDULLAH</p>
            <h1>MERN Stack Developer</h1>
            <div>
                <Link to="/project" className='btn'>PROJECTS</Link>
                <Link to="/contact" className='btn-light'>CONTACT</Link>
            </div>
        </div>

    </div>
  )
}

export default HeroImg