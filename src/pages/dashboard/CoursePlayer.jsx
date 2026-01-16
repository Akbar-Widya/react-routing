import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../store/useStore";

export default function CoursePlayer() {
  const { courseId } = useParams();

  const courses = useStore((state) => state.courses);
  const allModules = useStore((state) => state.modules);
  const completedLessons = useStore((state) => state.completedLessons);
  const toggleComplete = useStore((state) => state.toggleComplete);

  const courseData = useMemo(() => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return null;

    const courseModules = allModules
      .filter((m) => m.courseId === courseId)
      .sort((a, b) => a.position - b.position);

    return { ...course, modules: courseModules };
  }, [courseId, courses, allModules]);

  const firstLessonId = courseData?.modules[0]?.lessons[0]?.id;
  const [activeLessonId, setActiveLessonId] = useState(firstLessonId);

  const currentLesson = useMemo(() => {
    if (!courseData) return null;
    for (const mod of courseData.modules) {
      const found = mod.lessons.find(
        (l) => l.id === (activeLessonId || firstLessonId)
      );
      if (found) return found;
    }
    return null;
  }, [courseData, activeLessonId, firstLessonId]);

  const flatLessons = useMemo(() => {
    return courseData ? courseData.modules.flatMap((m) => m.lessons) : [];
  }, [courseData]);

  const currentIndex = flatLessons.findIndex(
    (l) => l.id === (activeLessonId || firstLessonId)
  );

  const handleNext = () => {
    if (currentIndex < flatLessons.length - 1) {
      setActiveLessonId(flatLessons[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveLessonId(flatLessons[currentIndex - 1].id);
    }
  };

  if (!courseData)
    return (
      <div className="p-20 font-mono text-xs uppercase tracking-widest text-slate-400">
        Course content not found.
      </div>
    );

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* SIDEBAR: Courses Navigation */}
      <aside className="max-md:hidden w-80 border-r border-slate-100 flex flex-col bg-white">
        <div className="p-6 border-b border-slate-100">
          <Link
            to={`/dashboard/courses/${courseId}`}
            className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
          >
            ← Back to Overview
          </Link>
          {/* Softened header slightly from font-black to font-bold for the sidebar */}
          <h2 className="mt-4 text-lg font-bold tracking-tighter text-slate-900 uppercase leading-tight">
            {courseData.title}
          </h2>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {courseData.modules.map((module) => (
            <div key={module.id} className="mb-2">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
                {/* Softened Module Title */}
                <p className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider line-clamp-2">
                  {module.title}
                </p>
              </div>

              {module.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={`w-full flex items-start px-6 py-4 text-left border-b border-slate-50 transition-all ${
                    (activeLessonId || firstLessonId) === lesson.id
                      ? "bg-indigo-50/30 border-l-2 border-l-indigo-600"
                      : "hover:bg-slate-50 border-l-2 border-l-transparent"
                  }`}
                >
                  <span className="font-mono text-[10px] font-semibold text-slate-300 mr-4 mt-0.5">
                    {String(lesson.position).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-xs font-semibold line-clamp-2 leading-relaxed ${
                      activeLessonId === lesson.id
                        ? "text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    {lesson.title}
                  </span>
                  {completedLessons.includes(lesson.id) && (
                    <span className="ml-auto text-indigo-600 text-xs font-semibold">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* VIEWER: Lesson Content */}
      <main className="flex-1 flex flex-col bg-white">
        <div className="h-16 border-b border-slate-100 flex items-center px-10 max-md:px-0">
          {/* Breadcrumb style text softened */}
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            {courseData.title} /{" "}
            <span className="text-indigo-600">{currentLesson?.title}</span>
          </p>
        </div>

        <div className="p-10 overflow-y-auto max-md:px-0">
          <div className="max-w-5xl mx-auto">
            {/* Media Player Placeholder */}
            <div className="aspect-video bg-slate-900 flex flex-col items-center justify-center text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <div className="mb-4 w-12 h-12 border border-slate-700 flex items-center justify-center rounded-full">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-slate-500 border-b-[6px] border-b-transparent ml-1"></div>
              </div>
              Streaming Source: {currentLesson?.contentUrl}
            </div>

            <div className="mt-10 border-b border-slate-100 pb-10">
              <div className="flex justify-between items-start max-md:flex-col max-md:gap-6">
                <div className="max-w-2xl">
                  {/* Kept Black here for a strong focal point */}
                  <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase max-md:text-3xl">
                    {currentLesson?.title}
                  </h1>
                  {/* Softened body text weight */}
                  <p className="mt-4 text-slate-600 leading-relaxed font-normal">
                    {currentLesson?.description ||
                      "No lesson summary provided."}
                  </p>
                </div>

                <button
                  onClick={() => toggleComplete(currentLesson?.id)}
                  className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest border-2 transition-all ${
                    completedLessons.includes(currentLesson?.id)
                      ? "bg-indigo-600 border-indigo-600 text-white"
                      : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {completedLessons.includes(currentLesson?.id)
                    ? "Mark Incomplete"
                    : "Complete Lesson"}
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="py-10 flex gap-4 items-center justify-between max-md:px-0">
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Lesson {currentIndex + 1} of {flatLessons.length}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-8 py-4 border border-slate-200 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === flatLessons.length - 1}
                  className="px-8 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 disabled:opacity-30 transition-all"
                >
                  Next Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
