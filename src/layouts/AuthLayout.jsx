import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
}
