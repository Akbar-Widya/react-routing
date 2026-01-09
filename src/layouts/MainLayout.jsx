import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="p-4 border-b flex justify-between items-center bg-white shadow-sm">
        <Link to="/" className="font-bold text-xl text-indigo-600">DevAcademy</Link>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
          <Link to="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">Dashboard</Link>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-8"><Outlet /></main>
    </div>
  );
}