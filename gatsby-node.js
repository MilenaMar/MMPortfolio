//const path = require("path") // node core module no installation need it.
//
//exports.onCreateNode = ({ node, actions }) => {
//  const { createNodeField } = actions
//  if (node.internal.type === "MarkdownRemark") {
//    // console.log(JSON.stringify(node, undefined, 4))
//    //acces the Slug
//    const slug = path.basename(node.fileAbsolutePath, ".md")
//    // add the field of the slug with the value of the 'slug'
//    createNodeField({
//      node,
//      name: "slug",
//      value: slug,
//    })
//  }
//}
//
//exports.createPages = ({ graphql, actions }) => {
//  const { createPage } = actions
//  //create an absolute path from the root of the hardrive
//  const projectTemplate = path.resolve(`./src/templates/project.js`)
//  return graphql(
//    `
//      query loadPagesQuery($limit: Int!) {
//        allMarkdownRemark(limit: $limit) {
//          edges {
//            node {
//              fields {
//                slug
//              }
//            }
//          }
//        }
//      }
//    `,
//    { limit: 1000 }
//  ).then(result => {
//    if (result.errors) {
//      throw result.errors
//    }
//
//    // Create blog post pages.
//    result.data.allMarkdownRemark.edges.forEach(e => {
//      createPage({
//        // Path for this page — required
//        path: `/projects/${e.node.fields.slug}`,
//        component: projectTemplate,
//        context: {
//          slug: e.node.fields.slug,
//        },
//      })
//    })
//  })
//}
//