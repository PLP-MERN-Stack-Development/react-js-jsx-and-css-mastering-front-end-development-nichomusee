// Footer with links and copyright
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
      </div>
    </footer>
  );
}
