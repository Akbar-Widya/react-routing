import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, isLoading, authError } = useStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Register the new user in the store
    const result = await register(name, email, password);

    if (result.success) {
      // Navigate straight to dashboard after registration
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center px-6 font-sans">
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
            Create Your Account
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {authError && (
            <div className="bg-red-50 border-l-2 border-red-500 p-4 mb-6">
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                {authError}
              </p>
            </div>
          )}

          <div>
            <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              disabled={isLoading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 px-4 py-4 text-sm focus:outline-none focus:border-indigo-600 transition-colors disabled:opacity-50"
              placeholder="e.g. Sarah Chen"
            />
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
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
            <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">
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
            {isLoading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
