import React, { useState } from "react"
import { Link } from "gatsby"

const BlogTeaser = ({ title, slug, publishedDate, excerpt, author, featuredImage }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="border-b pb-4 mb-4">
      <h2 className="text-2xl font-bold">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p className="text-gray-600">{publishedDate} by {author}</p>
      {featuredImage && (
        <img src={featuredImage.file.url} alt={title} className="w-full h-64 object-cover mb-4" />
      )}
      <p>{showMore ? excerpt : `${excerpt.substring(0, 100)}...`}</p>
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  )
}

export default BlogTeaser
