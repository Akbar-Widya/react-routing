import { create } from 'zustand';
import { MOCK_COURSES } from '../data/mock_courses';
import { MOCK_MODULES } from '../data/mock_modules';

export const useStore = create((set, get) => ({
  courses: MOCK_COURSES,
  modules: MOCK_MODULES,

  // --- AUTH STATE ---
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  // Persistent list of registered users
  registeredUsers: JSON.parse(localStorage.getItem("registeredUsers")) || [],
  isLoading: false,
  authError: null,

  // Progress is now loaded based on the logged-in user's ID
  completedLessons: (() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`progress_${user.id}`)) || [];
  })(),

  // --- ACTIONS ---

  register: async (name, email, password) => {
    set({ isLoading: true, authError: null });
    await new Promise(r => setTimeout(r, 800));

    const newUser = {
      id: `u_${Date.now()}`,
      name,
      email,
      password,
      role: "student"
    };

    // 1. Save to the persistent "database"
    const updatedUsers = [...get().registeredUsers, newUser];
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

    // 2. AUTO-LOGIN: Set the active session immediately
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    set({
      registeredUsers: updatedUsers,
      currentUser: newUser,
      isLoggedIn: true,
      completedLessons: [], // New users start with fresh progress
      isLoading: false
    });

    return { success: true };
  },

  login: async (email, password) => {
    set({ isLoading: true, authError: null });
    await new Promise(r => setTimeout(r, 1000));

    // Find user in our "database"
    const user = get().registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Load this specific user's progress
      const userProgress = JSON.parse(localStorage.getItem(`progress_${user.id}`)) || [];

      set({
        isLoggedIn: true,
        currentUser: user,
        completedLessons: userProgress,
        isLoading: false
      });
      return { success: true };
    } else {
      set({ authError: "Invalid corporate credentials", isLoading: false });
      return { success: false };
    }
  },

  logout: () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    // We do NOT remove progress from localStorage, we just clear it from the active state
    set({ isLoggedIn: false, currentUser: null, completedLessons: [], authError: null });
  },

  toggleComplete: (lessonId) => {
    const user = get().currentUser;
    if (!user) return;

    set((state) => {
      const newCompleted = state.completedLessons.includes(lessonId)
        ? state.completedLessons.filter(id => id !== lessonId)
        : [...state.completedLessons, lessonId];

      // Save using a unique key per user
      localStorage.setItem(`progress_${user.id}`, JSON.stringify(newCompleted));
      return { completedLessons: newCompleted };
    });
  },

  getCourseProgress: (courseId) => {
    const state = get();
    const courseLessons = state.modules
      .filter(m => m.courseId === courseId)
      .flatMap(m => m.lessons);

    if (courseLessons.length === 0) return 0;
    const completedCount = courseLessons.filter(lesson =>
      state.completedLessons.includes(lesson.id)
    ).length;

    return Math.round((completedCount / courseLessons.length) * 100);
  },
}));