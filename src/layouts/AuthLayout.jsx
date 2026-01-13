import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple Header for Brand Identity */}
      <nav className="p-8">
        <Link to="/" className="font-black text-xs uppercase tracking-[0.4em] text-slate-900">
          Dev<span className="text-indigo-600">Academy</span>
        </Link>
      </nav>

      {/* Centered Focus Area */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-sm border-t-4 border-slate-900 pt-12">
          <Outlet />
        </div>
      </div>
      
      {/* Subtle Footer */}
      <footer className="p-8 text-center">
        <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">
          Secure_Gate_v1.0
        </p>
      </footer>
    </div>
  );
}