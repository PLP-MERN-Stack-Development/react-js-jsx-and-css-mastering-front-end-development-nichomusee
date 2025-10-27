import { Link } from 'react-router-dom'

// Simple top navigation bar
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">My App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
      </div>
    </nav>
  );
}
