 // Card component for boxed content layout
export default function Card({ title, children }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      {/* Optional title */}
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      
      {/* Main content */}
      <div>{children}</div>
    </div>
  );
}
