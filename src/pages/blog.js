import React, { useState } from "react"
import { graphql } from "gatsby"
import BlogTeaser from "../components/blogteaser"
import SearchBar from "../components/searchbar"

const BlogPage = ({ data }) => {
  const [filteredPosts, setFilteredPosts] = useState(data.allContentfulPageBlogPost.edges)

  const handleSearch = (searchTerm) => {
    const filtered = data.allContentfulPageBlogPost.edges.filter(({ node }) =>
      node.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPosts(filtered)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <SearchBar onSearch={handleSearch} />
      {filteredPosts.map(({ node }) => (
        <BlogTeaser
          key={node.slug}
          title={node.title}
          slug={node.slug}
          publishedDate={node.publishedDate}
          excerpt={node.subtitle}
          author={node.author.name}
          featuredImage={node.featuredImage}
        />
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
          subtitle
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
