import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import LinkedIn from "../../static/Linked.png"
import Github from "../../static/github.png"
import footerStyles from "../styles/footer.module.scss"
import resume from "../../static/resume.png"
import icons8 from "../../static/icons8.png"
import myCv from "../../static/Milena Martinez CV.pdf"



const Footer = () => {
    const data = useStaticQuery (graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <footer className={footerStyles.socialMenu}>
            <p> © 2021 - All Rights reserved <a
          href="https://www.linkedin.com/in/milena-martinez-caceres-380729ab/"
          target="_blank"
          rel="noreferrer"
        >
         <strong>{data.site.siteMetadata.author}</strong>
        </a>  </p>
            <ul>
            <li>
             <a href="https://www.linkedin.com/in/milena-martinez-caceres/" 
             target="_blank" rel="noreferrer"> 
             <img src={LinkedIn} alt="LinkedIn Icon"/>
             </a>
            </li> 
            <li>
                <a href="https://github.com/MilenaMar"
                 target="_blank" rel="noreferrer">
                  <img src={Github} alt ="Github icon"/>
                  </a>
            </li>
            <li>
               <a href={myCv} download>
                  <img src={resume} alt ="download resume"/>
                  </a> 
            </li>
            <li>
               <a href="https://icons8.com/"  target="_blank" rel="noreferrer">
                  <img src={icons8} alt ="illustrations source"/>
                  </a> 
            </li>
        </ul>
        </footer>
    )
}

export default Footer;