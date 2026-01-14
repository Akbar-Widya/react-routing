import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DashboardLayout() {
  // Check screen width to determine initial state
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const navigate = useNavigate();

  // Handle window resizing to ensure UX remains consistent
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `flex items-center px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all lg:border-r-2 ${
      isActive
        ? "text-indigo-600 bg-slate-50 border-indigo-600"
        : "text-slate-400 border-transparent hover:text-slate-900"
    }`;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white font-sans">
      
      {/* SIDEBAR */}
      <aside 
        className={`${sidebarOpen ? "translate-x-0 w-full lg:w-64" : "-translate-x-full lg:w-0 lg:opacity-0"} 
          fixed lg:sticky top-0 h-screen bg-white z-[60] border-r border-slate-100 flex flex-col transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Sidebar Header with X */}
        <div className="h-20 flex items-center justify-between px-8 lg:px-10 border-b border-slate-100">
          <Link to="/" className="block">
            <div className="flex items-baseline gap-1">
              <h2 className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                Oaks
              </h2>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                Protocol
              </span>
            </div>
          </Link>

          <button 
            onClick={() => setSidebarOpen(false)}
            className="relative w-5 h-5 flex items-center justify-center hover:opacity-50 transition-opacity"
          >
            <div className="absolute w-5 h-[1.5px] bg-slate-900 rotate-45"></div>
            <div className="absolute w-5 h-[1.5px] bg-slate-900 -rotate-45"></div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-4">
          <NavLink to="/dashboard" end className={navClass}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/courses" className={navClass}>
            Curriculum
          </NavLink>
        </nav>

        <div className="mt-auto border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full px-8 py-6 text-left text-[9px] font-black uppercase tracking-widest text-slate-300 hover:text-red-500 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-white relative">
        
        {/* Fixed Top-Fix Hamburger Menu with Shadow */}
        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            className="fixed top-6 right-6 z-50 bg-white p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-indigo-600 transition-all flex flex-col gap-1"
            aria-label="Open Menu"
          >
            <div className="w-5 h-[2.5px] bg-slate-900"></div>
            <div className="w-5 h-[2.5px] bg-slate-900"></div>
            <div className="w-3 h-[2.5px] bg-slate-900"></div>
          </button>
        )}

        {/* Content Container */}
        <div className={`flex-1 overflow-y-auto ${!sidebarOpen ? 'pt-24' : 'pt-0'} lg:p-16 transition-all duration-300`}>
          <div className={`${sidebarOpen ? "max-w-5xl" : "max-w-full"} mx-auto px-6 lg:px-0 transition-all duration-500`}>
            <Outlet />
          </div>
        </div>
      </main>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[55] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}