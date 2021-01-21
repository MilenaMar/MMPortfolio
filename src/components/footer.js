import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"
import Social from './socialBar';




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
           <Social/>
        </footer>
    )
}

export default Footer;