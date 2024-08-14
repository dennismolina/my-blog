import React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {data.allContentfulPageBlogPost.edges.map(({ node }) => (
        <div key={node.slug} className="mb-8">
          <h2 className="text-2xl font-semibold">
            <Link to={`/blog/${node.slug}`}>{node.title}</Link>
          </h2>
          <p>{node.publishedDate}</p>
          <p>{node.author.name}</p>
          {node.featuredImage && (
            <img
              src={node.featuredImage.file.url}
              alt={node.title}
              className="mb-4"
            />
          )}
          <Link to={`/blog/${node.slug}`} className="text-blue-500">
            Read more
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulPageBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
          author {
            name
          }
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default BlogPage
