import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <h1>Welcome to My Blog</h1>
    <p>This is the homepage.</p>
    <Link to="/blog">Go to Blog</Link>
  </div>
)

export default IndexPage
