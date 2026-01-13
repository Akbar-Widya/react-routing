import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // In a real app, this would be a Unidirectional flow 
    // updating your Zustand store's 'user' state.
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
          Login
        </h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Access your curriculum and progress
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-900">
              Email Address
            </label>
            <input 
              className="w-full border border-slate-200 p-4 text-sm font-medium outline-none focus:border-indigo-600 transition-colors bg-white" 
              placeholder="name@email.com" 
              type="email" 
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-900">
              Password
            </label>
            <input 
              className="w-full border border-slate-200 p-4 text-sm font-medium outline-none focus:border-indigo-600 transition-colors bg-white" 
              placeholder="••••••••" 
              type="password" 
            />
          </div>
        </div>

        {/* Action Button: Clean and Impactful */}
        <button 
          onClick={handleLogin} 
          className="w-full bg-slate-900 text-white py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-600 transition-colors duration-200"
        >
          Sign In
        </button>
        
        {/* Secondary Actions */}
        <div className="pt-6 flex justify-between items-center border-t border-slate-100">
           <button className="text-[9px] text-slate-400 font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">
             Forgot Password?
           </button>
           <button className="text-[9px] text-slate-900 font-black uppercase tracking-widest underline decoration-indigo-600 underline-offset-4">
             Create Account
           </button>
        </div>
      </div>
    </div>
  );
}