import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, authError } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);

    if (result.success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 font-sans">
      <div className="w-full max-w-[400px]">
        {/* Branding */}
        <div className="mb-12 text-center">
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <h1 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">
              Oaks
            </h1>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em]">
              Learning
            </span>
          </div>
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            Learning Management System
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {authError && (
            <div className="bg-red-50 border-l-2 border-red-500 p-4 mb-6">
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                {authError}
              </p>
            </div>
          )}

          <div>
            <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 px-4 py-4 text-sm focus:outline-none focus:border-indigo-600 transition-colors disabled:opacity-50"
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              required
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 px-4 py-4 text-sm focus:outline-none focus:border-indigo-600 transition-colors disabled:opacity-50"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 text-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200/50 disabled:bg-slate-400 flex justify-center items-center"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 hover:underline ml-1"
            >
              Register Now
            </Link>
          </p>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest">
            LMS Dashboard / v1.0.4
          </p>
        </footer>
      </div>
    </div>
  );
}
