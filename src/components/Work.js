import React from "react"
import DynamicCards from "./DynamicCards"
import WorkCardData from "./WorkCardData"
import "./dynamicCardStyles.css"


const Work = () => {
  return (
    <div className="dynamic-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val, ind) => {
            return(
              <DynamicCards
               key={ind}
               imgsrc={val.imgsrc}
               title={val.title}
               text = {val.text}
               view = {val.view}
               code = {val.code}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Work
        