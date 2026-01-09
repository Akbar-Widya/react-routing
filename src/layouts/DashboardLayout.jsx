import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `p-3 rounded-xl transition ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 bg-white border-r p-6 flex flex-col shadow-sm">
        <Link to='/'>
          <h2 className="font-bold text-xl text-indigo-600 mb-8 px-2">
            Student Panel
          </h2>
        </Link>
        <nav className="flex flex-col gap-1 flex-1">
          <NavLink to="/dashboard" end className={navClass}>
            Overview
          </NavLink>
          <NavLink to="/dashboard/courses" className={navClass}>
            My Courses
          </NavLink>
        </nav>
        <button
          onClick={handleLogout}
          className="p-3 text-left text-red-500 hover:bg-red-50 rounded-xl transition mt-auto"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
