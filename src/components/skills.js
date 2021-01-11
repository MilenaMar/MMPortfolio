import React from "react"
import skillsStyles from "../styles/skills.module.scss"
import code from "../../static/skillsIcons/Skills.png"
import javaSIcon from "../../static/skillsIcons/javascript.png"
import bootstrapIcon from "../../static/skillsIcons/bootstrap.png"
import cssIcon from "../../static/skillsIcons/CSS.png"
import graphqlIcon from "../../static/skillsIcons/graphql.png"
import htmlIcon from "../../static/skillsIcons/html.png"
import mongoIcon from "../../static/skillsIcons/mongo.png"
import reactIcon from "../../static/skillsIcons/react.png"
import nodeIcon from "../../static/skillsIcons/nodejs.png"
import gatsbyIcon from "../../static/skillsIcons/gatsby.png"
import sassIcon from "../../static/skillsIcons/sass.png"

const Skills = () => {
  return (
    <div className={skillsStyles.skillsSection}>
    <div  className={skillsStyles.skillHeader}><img src={code} alt="code logo" />
      <h2>Skills</h2></div>
      <div>
      <ul className={skillsStyles.skillsList}>
        <li>
          Javascript <img src={javaSIcon} alt="skill icon" />
        </li>
        <li>
          CSS3
          <img src={cssIcon} alt="skill icon" />
        </li>
        <li>
          HTML5 <img src={htmlIcon} alt="skill icon" />
        </li>
        <li>
          React <img src={reactIcon} alt="skill icon" />
        </li>
        <li>
          Gatsby
          <img src={gatsbyIcon} alt="skill icon" />
        </li>
        <li>
          GraphQL
          <img src={graphqlIcon} alt="skill icon" />
        </li>
        <li>
          SaSS
          <img src={sassIcon} alt="skill icon" />
        </li>
        <li>
          Bootstrap
          <img src={bootstrapIcon} alt="skill icon" />
        </li>
       
      <li>
          ExpressJs <img src={nodeIcon} alt="skill icon" />{" "}
        </li>
        <li>
          NodeJS <img src={nodeIcon} alt="skill icon" />{" "}
        </li>
        <li>
          {" "}
          MongoDB <img src={mongoIcon} alt="skill icon" />{" "}
        </li>
        </ul>
      </div>
          </div>
  )
}

export default Skills
