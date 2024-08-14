const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulPageBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulPageBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
