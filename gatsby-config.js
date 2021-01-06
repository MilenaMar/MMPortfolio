/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Milena Martinez",
    author: "Milena Martinez ♥",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-transformer-sharp",
    {
      resolve:"gatsby-transformer-remark", 
      options: {
        plugins: [
         "gatsby-remark-relative-images",
         {
           resolve:"gatsby-remark-images",
           options:{
             maxWidth:1200,
             linkImagesToOriginal:false
           }
         }
        ]
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/`,
      },
    },
    "gatsby-plugin-styled-components",
  ],
}
