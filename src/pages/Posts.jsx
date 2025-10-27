import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(10)

  // Fetch posts from API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch posts')
        return res.json()
      })
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Filter posts by search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Limit visible posts for pagination
  const visiblePosts = filteredPosts.slice(0, visibleCount)

  return (
    <Layout>
      <Card title="Posts">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Loading and error states */}
        {loading && <p>Loading posts...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {/* Posts list */}
        <ul className="space-y-4">
          {visiblePosts.map(post => (
            <li key={post.id} className="border p-4 rounded shadow-sm">
              <h3 className="font-bold text-lg mb-1">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>

        {/* Load more button */}
        {visibleCount < filteredPosts.length && (
          <div className="mt-4 text-center">
            <Button
              label="Load More"
              variant="secondary"
              onClick={() => setVisibleCount(prev => prev + 10)}
            />
          </div>
        )}
      </Card>
    </Layout>
  )
}
