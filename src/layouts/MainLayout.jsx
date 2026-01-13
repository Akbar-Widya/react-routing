import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Navbar: High-fidelity, minimal friction */}
      <nav className="h-24 border-b border-slate-100 flex justify-between items-center px-8 md:px-12 bg-white sticky top-0 z-50">
        
        {/* Consistent Brand Identity */}
        <Link to="/" className="group flex items-baseline gap-1">
          <h2 className="text-xl font-black tracking-tighter text-slate-900 uppercase">
            Oaks
          </h2>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
            Protocol
          </span>
        </Link>
        
        <div className="flex items-center gap-12">
          {/* Revised Nav Links: Softer, Professional weight */}
          <div className="hidden md:flex space-x-10 text-xs font-semibold tracking-tight text-slate-400">
            <Link to="/" className="hover:text-slate-900 transition-colors">Curriculum</Link>
            <Link to="/about" className="hover:text-slate-900 transition-colors">Institution</Link>
          </div>

          {/* Call to Action: Sharp and defined */}
          <Link 
            to="/dashboard" 
            className="border-2 border-slate-900 px-7 py-3 text-xs font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200"
          >
            Student Portal
          </Link>
        </div>
      </nav>

      {/* Main Content: The Home page or About page flows through here */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}