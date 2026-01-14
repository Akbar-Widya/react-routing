import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Minimal Header */}
      <nav className="p-10">
        <Link to="/" className="group block">
          <div className="flex items-baseline gap-1">
            <h2 className="text-xl font-black tracking-tighter text-slate-900 uppercase">
              Oaks
            </h2>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
              Protocol
            </span>
          </div>
        </Link>
      </nav>

      {/* Centered Content - No Borders */}
      <main className="flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="pb-8 px-6 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs font-black tracking-tighter text-slate-900 uppercase">
          Oaks Protocol
        </span>

        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase text-right">
            Project by Akbar Widya // 2026
          </span>
          <div className="w-2 h-2 bg-indigo-600"></div>
        </div>
      </footer>
    </div>
  );
}
