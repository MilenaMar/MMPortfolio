import React, {Component} from 'react'
import deploymentIcon from "../../static/deploy.png"
import sourceIcon from "../../static/github.png"
// import styled from 'styled-components'
//<button onClick={this.handleClick}>Read more </button>
//{this.state.open ? <PopStyle>
//  <h2>Section Comming Soon! For now go ahead and check my github repository</h2>
//  </PopStyle>   
//: "" }
//const PopStyle= styled.div`{
//    width: 100%;
//    height: 550px;
//    position:relative;
//    top:-95%;
//    background-color:white;
//    display: block;
//    background-color: rgba(22,22,22,0.5): 
//}`

class Card extends  Component {
// state = {
//   open: false,
// };


//handleClick= (e) => {
//  e.preventDefault();
//  console.log(this.state.open)
//this.setState({open: true})
//}

  render(){
  const {title, image, description, tech, source, deployment}  = this.props.info.node.frontmatter
return(
        <div className="card" >
            <div className="card-header">
            <h2>{title}</h2>
            <img src={image} className="project" alt="project"/>
            </div>
      <div className="body">
        <h5>{description}</h5>
        <p>{tech}.</p>
        <div className="project-information">
        
        <div>
      <a href={source} target="_blank"
        rel="noreferrer"><img src={sourceIcon} alt="github"></img></a> 
        <a href={deployment} target="_blank"
        rel="noreferrer"><img src={deploymentIcon} alt="deploy page"></img></a>
        </div>
       </div>
     </div>
  </div>
)
  }
}

export default Card;