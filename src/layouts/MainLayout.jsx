import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Navbar: Sharp, zero-shadow, hairline border */}
      <nav className="h-20 border-b border-slate-100 flex justify-between items-center px-8 md:px-12 bg-white sticky top-0 z-50">
        <Link to="/" className="font-black text-xl tracking-tighter text-slate-900 uppercase">
          Dev<span className="text-indigo-600">Academy</span>
        </Link>
        
        <div className="flex items-center gap-10">
          <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-slate-900 transition-colors">About</Link>
          </div>
          <Link 
            to="/dashboard" 
            className="border-2 border-slate-900 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}