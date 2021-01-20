import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Thumbnail from '../../static/thumb.png'

const Metadata = ({ title, description }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    `
  )
  const metaTitle =  data.site.siteMetadata.author
  const metaDescription = description 
  return (
     <Helmet>
     <meta name="description" content={metaDescription} /> 
      <meta name="image"  content={Thumbnail}/>
      <meta property="og:url" content="https://www.milenamartinez.com" />
      <meta property="og:type" content="website" />
      <meta name="author" content={data.site.siteMetadata.author}/>
      <meta property="og:image" content="https://www.milenamartinez.com/thumb.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content="https://www.milenamartinez.com/thumb.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Mlena Martinez Portfolio"/>
      <meta name="twitter:image" content="https://www.milenamartinez.com/thumb.png"/>
      <html lang="en" dir="ltr" />
      <title>{(!title)? `${metaTitle}`: `${metaTitle} | ${title}`}</title>
    </Helmet>
    
  )
}

export default Metadata