import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Login to DevAcademy</h2>
      <div className="space-y-4">
        <input className="w-full border p-3 rounded-xl outline-none" placeholder="Email" type="email" />
        <input className="w-full border p-3 rounded-xl outline-none" placeholder="Password" type="password" />
        <button onClick={handleLogin} className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700">Login</button>
      </div>
    </div>
  );
}