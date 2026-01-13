import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `relative flex items-center px-8 py-5 text-xs font-semibold transition-all duration-200 border-r-2 ${
      isActive
        ? "text-slate-900 bg-slate-50/50 border-indigo-600"
        : "text-slate-400 border-transparent hover:text-slate-600 hover:bg-slate-50/30"
    }`;

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* --- SIDEBAR: Oaks Protocol Portal --- */}
      <aside className="w-72 border-r border-slate-100 flex flex-col sticky top-0 h-screen">
        
        {/* Brand Area: Institutional Style */}
        <div className="p-10 border-b border-slate-100">
          <Link to="/" className="group block">
            <div className="flex items-baseline gap-1">
              <h2 className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                Oaks
              </h2>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                Protocol
              </span>
            </div>
            <p className="text-[9px] font-medium text-slate-400 mt-1 uppercase tracking-tighter">
              Skills Infrastructure
            </p>
          </Link>
        </div>

        {/* Primary Navigation */}
        <nav className="flex flex-col pt-6">
          <NavLink to="/dashboard" end className={navClass}>
            <span className="font-mono text-[10px] mr-4 text-slate-300">01 //</span>
            Overview
          </NavLink>
          <NavLink to="/dashboard/courses" className={navClass}>
            <span className="font-mono text-[10px] mr-4 text-slate-300">02 //</span>
            My Library
          </NavLink>
        </nav>

        {/* Utility Actions */}
        <div className="mt-auto border-t border-slate-100">
          <Link
            to="/"
            className="flex items-center gap-3 px-8 py-5 text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <span>←</span> Back to Index
          </Link>

          <button
            onClick={handleLogout}
            className="w-full px-8 py-6 text-left text-xs font-semibold text-slate-300 hover:text-red-500 transition-colors border-t border-slate-50"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN STAGE --- */}
      <main className="flex-1 p-12 lg:p-24 overflow-y-auto">
        <div className="max-w-7xl">
          {/* React Reminder: This Outlet is where the specific 
            Dashboard pages (Overview, Library) will "flow" 
            into this parent structure.
          */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}