import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <input
      type="text"
      placeholder="Search blog posts..."
      value={searchTerm}
      onChange={handleInputChange}
      className="border p-2 rounded w-full mb-6"
    />
  )
}

export default SearchBar
