import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store/useStore";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const navigate = useNavigate();

  const { currentUser, logout } = useStore();

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
    logout();
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `flex items-center px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all lg:border-r-2 ${
      isActive
        ? "text-indigo-600 bg-slate-50 border-indigo-600"
        : "text-slate-500 border-transparent hover:text-slate-900"
    }`;

  return (
    /* PERBAIKAN UTAMA: Menggunakan h-screen dan overflow-hidden pada parent paling luar */
    <div className="flex h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside
        className={`${
          sidebarOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full w-0 lg:opacity-0"
        } 
          fixed lg:relative top-0 h-full bg-white z-60 border-r border-slate-100 flex flex-col transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="h-20 shrink-0 flex items-center justify-between px-8 lg:px-10 border-b border-slate-100">
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

        <nav className="flex flex-col mt-4 overflow-y-auto">
          <NavLink to="/dashboard" end className={navClass}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/courses" className={navClass}>
            Courses
          </NavLink>
        </nav>

        <div className="mt-auto border-t border-slate-100 p-8 shrink-0">
          <div className="mb-4">
            <p className="text-[8px] font-bold text-slate-400 uppercase mb-1">
              Logged in as
            </p>
            <p className="text-[10px] font-bold text-indigo-600 uppercase truncate">
              {currentUser?.name || "User"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left text-[12px] font-black uppercase tracking-widest text-slate-500 hover:text-red-500 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-white relative h-full overflow-hidden">
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-6 right-6 z-50 bg-white p-4 shadow-sm border border-slate-100 hover:border-indigo-600 transition-all flex flex-col gap-[5px]"
            aria-label="Open Menu"
          >
            <div className="w-5 h-[2px] bg-slate-900"></div>
            <div className="w-5 h-[2px] bg-slate-900"></div>
            <div className="w-5 h-[2px] bg-slate-900"></div>
          </button>
        )}

        {/* Scrollable Container */}
        <div
          className={`flex-1 overflow-y-auto transition-all duration-300`}
        >
          {/* Wrapper Konten Utama agar Footer didorong mt-auto */}
          <div className="min-h-full flex flex-col">
            <div
              className={`flex-1 ${
                sidebarOpen ? "max-w-8xl" : "max-w-full"
              } mx-auto w-full px-8 md:px-12 lg:px-16 pt-12 md:pt-24 pb-12 transition-all duration-500`}
            >
              <Outlet />
            </div>

            {/* Footer bekerja dengan mt-auto */}
            {!sidebarOpen && (
              <div className="mt-auto">
                <Footer />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Overlay Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-55 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}