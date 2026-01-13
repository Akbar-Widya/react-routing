import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `relative flex items-center px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
      isActive
        ? "text-slate-900 bg-slate-50 border-r-4 border-indigo-600"
        : "text-slate-400 hover:text-slate-600 hover:bg-slate-50/50"
    }`;

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar: Strict and Vertical */}
      <aside className="w-72 border-r border-slate-100 flex flex-col sticky top-0 h-screen">
        
        {/* Brand/Logo Area */}
        <div className="p-8 border-b border-slate-100">
          <Link to='/'>
            <h2 className="font-black text-xs uppercase tracking-[0.4em] text-slate-900">
              Terminal <span className="text-indigo-600">v1.0</span>
            </h2>
          </Link>
        </div>

        {/* Primary Navigation */}
        <nav className="flex flex-col pt-4">
          <NavLink to="/dashboard" end className={navClass}>
            01 // Overview
          </NavLink>
          <NavLink to="/dashboard/courses" className={navClass}>
            02 // My Courses
          </NavLink>
        </nav>

        {/* Utility / Exit Actions */}
        <div className="mt-auto flex flex-col border-t border-slate-50">
          {/* Home Link: Impactful but Quiet */}
          <Link 
            to="/" 
            className="px-8 py-4 text-[10px] font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.3em] flex items-center gap-2"
          >
            <span className="text-xs">←</span> Return to Home
          </Link>
          
          <button
            onClick={handleLogout}
            className="px-8 py-6 text-left text-[10px] font-bold text-slate-300 hover:text-red-500 transition-colors uppercase tracking-[0.3em]"
          >
            _Terminate_Session
          </button>
        </div>
      </aside>

      {/* Work Stage */}
      <main className="flex-1 p-12 lg:p-20 overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}