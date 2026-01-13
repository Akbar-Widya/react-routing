// src/store/useStore.js
import { create } from 'zustand';
import { MOCK_COURSES } from '../data/mock_courses';
import { MOCK_MODULES } from '../data/mock_modules';
import { MOCK_USERS } from '../data/mock_users';

export const useStore = create((set, get) => ({
  // Data Sources
  courses: MOCK_COURSES,
  modules: MOCK_MODULES,
  users: MOCK_USERS,

  // Auth State
  currentUser: MOCK_USERS[0], // Mocking the logged-in student (Sarah Chen)
  isLoggedIn: !!localStorage.getItem("isLoggedIn"),

  // Progress State (Global)
  completedLessons: [],

  // Actions
  login: () => {
    localStorage.setItem("isLoggedIn", "true");
    set({ isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("isLoggedIn");
    set({ isLoggedIn: false });
  },

  toggleComplete: (lessonId) => set((state) => ({
    completedLessons: state.completedLessons.includes(lessonId)
      ? state.completedLessons.filter(id => id !== lessonId)
      : [...state.completedLessons, lessonId]
  })),

  // Selector Logic
  getCourseWithContent: (courseId) => {
    const course = get().courses.find(c => c.id === courseId);
    if (!course) return null;

    // Link modules to this course
    const courseModules = get().modules
      .filter(m => m.courseId === courseId)
      .sort((a, b) => a.position - b.position);

    return { ...course, modules: courseModules };
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