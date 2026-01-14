import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function ProtectedRoute() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  // 'replace' prevents them from hitting the 'back' button to return here
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
