import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal Header */}
      <nav className="p-10">
        <Link to="/" className="font-black text-sm uppercase tracking-[0.5em] text-slate-900">
          Oaks <span className="text-indigo-600">Method</span>
        </Link>
      </nav>

      {/* Centered Content - No Borders */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </main>
      
      {/* Clean Footer */}
      <footer className="p-10 text-center">
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">
          &copy; 2026 Professional Education Portal
        </p>
      </footer>
    </div>
  );
}