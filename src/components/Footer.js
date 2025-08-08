import React from 'react';
import "./footerStyles.css"
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style = {{color:"fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Islamabad, Pakistan</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style = {{color:"fff", marginRight: "2rem"}}/>
                    +92 330 915 2828</h4>
                    
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style = {{color:"fff", marginRight: "2rem"}}/>
                    abdullahabidmehmood1@gmail.com</h4>
                    
                </div>

            </div>
            <div className="right">
                <h4>Follow me on</h4>
                <div className="social">
                    <a href="https://www.instagram.com/unknown_abdoo/">
                        <FaInstagram size={30} style = {{color:"fff", marginRight: "1rem"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/abdullah-abid-b5358b286/">
                        <FaLinkedin size={30} style = {{color:"fff", marginRight: "1rem"}}/>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer