import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
          Login
        </h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Access your technical workspace
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          {/* Sharp, Accessible Inputs */}
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-900">Email Address</label>
            <input 
              className="w-full border border-slate-200 p-4 text-sm font-medium outline-none focus:border-indigo-600 transition-colors bg-slate-50/30" 
              placeholder="name@company.com" 
              type="email" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-900">Credential</label>
            <input 
              className="w-full border border-slate-200 p-4 text-sm font-medium outline-none focus:border-indigo-600 transition-colors bg-slate-50/30" 
              placeholder="••••••••" 
              type="password" 
            />
          </div>
        </div>

        <button 
          onClick={handleLogin} 
          className="w-full bg-slate-900 text-white py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-600 transition-colors duration-200 active:bg-indigo-700"
        >
          Initialize Session
        </button>
        
        <div className="pt-4 flex justify-between items-center border-t border-slate-100">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest cursor-pointer hover:text-slate-900">Forgot?</span>
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest cursor-pointer hover:text-slate-900 underline decoration-indigo-600 underline-offset-4">Create Account</span>
        </div>
      </div>
    </div>
  );
}