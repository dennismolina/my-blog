import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPost = ({ data }) => {
  const {
    title,
    publishedDate,
    author,
    content,
    featuredImage,
  } = data.contentfulPageBlogPost

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-2">Published on {publishedDate} by {author.name}</p>
      {featuredImage && <img src={featuredImage.file.url} alt={title} className="mb-6" />}
      <div className="prose">{documentToReactComponents(JSON.parse(content.raw))}</div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPageBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      author {
        name
      }
      content {
        raw
      }
      featuredImage {
        file {
          url
        }
      }
    }
  }
`

export default BlogPost
