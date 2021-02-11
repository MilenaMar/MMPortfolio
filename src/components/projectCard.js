import React, {Component} from 'react'
import deploymentIcon from "../../static/deploy.png"
import sourceIcon from "../../static/github.png"
import styled from "styled-components"

const PopupCard = styled.div`{
      
      
      margin: 1rem;
      padding: 1rem;
      max-width: 350px;
      min-height: 500px;
      border-radius: 5px;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

     .body-details {
       height:400px;
     }
   h2, h5 {
    text-align:center;
   }
     .description {  
       p{
      text-aling:justify;
       max-height:auto;
       font-size:1rem;
       }
     }

     .project-information{
       justify-content:center;
     }
}`

class Card extends  Component {
 state = {
   open: false,
 }

handleClick= (e) => {
  e.preventDefault();
  console.log(this.state.open)
   this.setState({open: true})
}

handleClickClose = (e) => {
  e.preventDefault();
  console.log(this.state.open)
  this.setState({open:false})
}

  render(){
  const {title, image, description, tech, source, deployment}  = this.props.info.node.frontmatter
  const html =  this.props.info.node.html
return(
  <> { this.state.open ?
   <PopupCard>
       <div className="body-details">
       <h2>{title}</h2>
       <h5>{description}</h5>
       <p>Built with {tech}</p>
       <div className="description" dangerouslySetInnerHTML={{ __html: html }}>
       </div>
       </div>
       <div className="project-information">
       <button onClick={this.handleClickClose}>  Close  </button>
       <a href={source} target="_blank"
       rel="noreferrer"><img src={sourceIcon} alt="github"></img></a> 
       <a href={deployment} target="_blank"
       rel="noreferrer"><img src={deploymentIcon} alt="deploy page"></img></a>
       </div>
  </PopupCard>
  
 :
        <div className='card' >
            <div className="card-header">
            <h2>{title}</h2>
            <img src={image} className="project" alt="project"/>
            </div>
      <div className="body">
        <h5>{description}</h5>
        <p>{tech}</p>
        <div className="project-information">
        <button onClick={this.handleClick}>Read more </button>
        <div>
      <a href={source} target="_blank"
        rel="noreferrer"><img src={sourceIcon} alt="github"></img></a> 
        <a href={deployment} target="_blank"
        rel="noreferrer"><img src={deploymentIcon} alt="deploy page"></img></a>
        </div>
       </div>
     </div>
  </div>
}</>
)
  }
}

export default Card;