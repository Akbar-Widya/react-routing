import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Overview from "./pages/dashboard/Overview";
import MyCourses from "./pages/dashboard/MyCourses";
import CoursePlayer from "./pages/dashboard/CoursePlayer";
import CourseDetail from "./pages/dashboard/CourseDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="/dashboard/player/:courseId" element={<CoursePlayer />} />
          <Route path="courses/:courseId" element={<CourseDetail />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}