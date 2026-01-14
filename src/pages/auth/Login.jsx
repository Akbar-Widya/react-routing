import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto py-8 px-6">
      {/* Header Section - Tightened margins */}
      <header className="mb-10">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
          Sign In
        </h2>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">
          Member Access // Professional Portal
        </p>
      </header>

      <div className="space-y-6">
        {/* Name Input Row - More compact gap */}
        <div className="grid grid-cols-2 gap-6">
          <div className="group flex flex-col">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              First Name
            </label>
            <input 
              type="text"
              placeholder="JANE"
              className="bg-transparent border-b border-slate-200 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-slate-900 transition-colors placeholder:text-slate-200" 
            />
          </div>
          <div className="group flex flex-col">
            <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              Last Name
            </label>
            <input 
              type="text"
              placeholder="DOE"
              className="bg-transparent border-b border-slate-200 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-slate-900 transition-colors placeholder:text-slate-200" 
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="group flex flex-col">
          <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            Email Address
          </label>
          <input 
            type="email"
            placeholder="NAME@EMAIL.COM"
            className="bg-transparent border-b border-slate-200 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-slate-900 transition-colors placeholder:text-slate-200" 
          />
        </div>

        {/* Password Input */}
        <div className="group flex flex-col">
          <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            Password
          </label>
          <input 
            type="password"
            placeholder="••••••••"
            className="bg-transparent border-b border-slate-200 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:border-slate-900 transition-colors placeholder:text-slate-200" 
          />
        </div>

        {/* Actions - Reduced padding and spacing */}
        <div className="pt-6 space-y-6">
          <button 
            onClick={handleLogin} 
            className="w-full bg-slate-900 text-white py-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-indigo-600 transition-all"
          >
            Sign In
          </button>
          
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest px-1">
             <button className="text-slate-300 hover:text-slate-900 transition-colors">
               Forgot Password
             </button>
             <button className="text-slate-900 border-b border-indigo-600">
               Register
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}