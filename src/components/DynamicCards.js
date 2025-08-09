import React from "react"
import "./dynamicCardStyles.css"


const DynamicCards = (props) => {
  return (
       <div className="project-card">
              <img src={props.imgsrc} alt= "image" className="project-image"/>
              <h2 className="project-title">{props.title}</h2>
              <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} target="_blank" rel="noopener noreferrer" className="btn">View</a>
                    <a href= {props.code}  target="_blank"  rel="noopener noreferrer"  className="btn">Visit</a>                
                </div>
              </div>
            </div>
  )
}

export default DynamicCards
        