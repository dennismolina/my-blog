import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { motion } from "framer-motion"

const BlogPost = ({ data }) => {
  const {
    title,
    publishedDate,
    author,
    featuredImage,
    content,
    relatedBlogPosts,
  } = data.contentfulPageBlogPost

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-600">{publishedDate}</p>
      <p className="text-gray-600">By {author.name}</p>
      {featuredImage && (
        <img src={featuredImage.file.url} alt={title} className="w-full h-auto mb-6" />
      )}
      <div className="prose">
        {documentToReactComponents(JSON.parse(content.raw))}
      </div>
      <h3 className="text-2xl font-semibold mt-8">Related Blog Posts</h3>
      <ul>
        {relatedBlogPosts.map(post => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-700">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
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
      featuredImage {
        file {
          url
        }
      }
      content {
        raw
      }
      relatedBlogPosts {
        title
        slug
      }
    }
  }
`

export default BlogPost
