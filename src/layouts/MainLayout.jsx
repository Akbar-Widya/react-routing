import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Navbar: Professional Header */}
      <nav className="h-20 border-b border-slate-100 flex justify-between items-center px-8 md:px-12 bg-white sticky top-0 z-50">
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

        <div className="flex items-center gap-8 md:gap-12">
          <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link to="/" className="nav-link">
              Courses
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>

          <Link to="/dashboard" className="btn-outline">
            Learning Portal
          </Link>
        </div>
      </nav>

      {/* Konten utama yang berubah-ubah */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer ditambahkan di sini agar muncul di semua halaman */}
      <Footer />
    </div>
  );
}
