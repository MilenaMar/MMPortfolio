import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import Metadata from "../components/metadata"
import  styled from "styled-components";

const HomeStyles = styled.div`
{
  > * {
    flex-grow: 1;
  }

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 60vh;
    margin-top:3rem;

    button{
      border: none;
      color: white;
      padding: 0.9em;
      border: none;
      font-size: 1.2rem;
      border-radius: 0.5em;
      background: #333231;
       transform-style: preserve-3d;
      transition: all 175ms cubic-bezier(0, 0, 1, 1);
    }


    button:hover {
      background: rgba(244,103,64,0.8);
      cursor: pointer;
      transform: translate(0, 0.375em);
    }
    
    button:focus{
      outline: none;
    }
    
    button:active {
    transform: translate(0em, 0.75em);
    }
    
    button:active::before {
      transform: translate3d(0, 0, -1em);
      box-shadow: 0 0 0 2px #EDE9E6;
    
    }

    div:nth-child(2) {
    max-width: 500px;
    max-height: 500px;

    h1{
      font-size:7rem;
    }
    p{
           font-size: 2rem;
        }
}

   div:last-child {
  max-width: 400px;
  max-height: 552px
   } 


    .circle {
     max-width: 0.1px;
}


@media (min-width: 1281px) {
    div:nth-child(2) {
        max-width: 800px;

        h1{
          font-size:9rem;
        }
        
    }
    div:last-child {
        max-width: 450px;
      }
    
  }

  @media (min-width: 481px) and (max-width: 720px) {

  div:last-child {
visibility: hidden;
width: 1px;
}

.circle {
max-width: 100%;
position: absolute;
border-radius: 50%;
background: #F56740;
animation: ripple 30s infinite;
box-shadow: 0px 0px 1px 0px #F56740;
}

.xlarge{
width: 400px;
height: 400px;
left: -200px;
bottom: 110px;
}


.shade2{
opacity: 0.3;
}


@keyframes ripple{
0%{
  transform: scale(0.8);
}

50%{
  transform: scale(1.2);
}
75%{
  transform: scale(1.4);

}
100%{
  transform: scale(0.8);
}
}


}
@media  (max-width: 480px) {

align-items: center;

div:nth-child(2) {
  h1{
    font-size:4.5rem;
    text-align:justify;
  } 

  p {
    font-size:1.5rem;
  }
}

div:last-child {
visibility: hidden;
}

.circle{
max-width: 100%;
position: absolute;
border-radius: 50%;
background: #F56740;
animation: ripple 20s infinite;
box-shadow: 0px 0px 1px 0px #F56740;
}

.xlarge{
width: 400px;
height: 400px;
left: -200px;
bottom: 110px;
}


.shade2{
opacity: 0.3;
}


@keyframes ripple{
0%{
  transform: scale(0.8);
}

50%{
  transform: scale(1.2);
}
75%{
  transform: scale(1.4);

}
100%{
  transform: scale(0.8);
}
}
}
}

`


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
  placeholderImage: file(relativePath: { eq: "homeImage.png" }) {
     childImageSharp {
      fluid  {
         ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
  }
  `)
return (
 <HomeStyles>
  <Metadata  description="Web Developer Milena Martinez "  />
  <div className="circle xlarge shade2"></div>
  <div>
  <h1>Milena <br/> Martinez</h1>
  <p>Full-Stack Developer. <br/>Always amazed to see how technology can impact people’s life.
</p>
<Link to="/contact"><button>Work together</button> </Link>
  </div>
  <div>
  <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="lady coder" /> 
  </div>   
  </HomeStyles>
)
}

export default IndexPage;