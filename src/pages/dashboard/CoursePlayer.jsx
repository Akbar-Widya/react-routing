import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../store/useStore";

export default function CoursePlayer() {
  const { courseId } = useParams();

  // 1. Pull raw data from the store
  const courses = useStore((state) => state.courses);
  const allModules = useStore((state) => state.modules);
  const completedLessons = useStore((state) => state.completedLessons);
  const toggleComplete = useStore((state) => state.toggleComplete);
  console.log("All Modules in CoursePlayer:", allModules);
  const courseData = useMemo(() => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return null;

    const courseModules = allModules
      .filter((m) => m.courseId === courseId)
      .sort((a, b) => a.position - b.position);

    return { ...course, modules: courseModules };
  }, [courseId, courses, allModules]);

  // 3. UI State for Navigation
  // Initialize with the first lesson ID if available
  const firstLessonId = courseData?.modules[0]?.lessons[0]?.id;
  const [activeLessonId, setActiveLessonId] = useState(firstLessonId);

  // 4. Find the current lesson object to display its content
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

  // 1. Flatten the modules/lessons into one single list
  const flatLessons = useMemo(() => {
    return courseData.modules.flatMap((m) => m.lessons);
  }, [courseData]);

  // 2. Find where we are in that list
  const currentIndex = flatLessons.findIndex(
    (l) => l.id === (activeLessonId || firstLessonId)
  );

  // 3. Navigation Logic
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
    return <div className="p-20 font-mono">0x404 // Protocol Lost</div>;

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      {/* SIDEBAR: The Tree Structure */}
      <aside className="w-80 border-r border-slate-100 flex flex-col bg-white">
        <div className="p-6 border-b border-slate-100">
          <Link
            to={`/dashboard/courses/${courseId}`}
            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-600"
          >
            ← Back to Syllabus
          </Link>
          <h2 className="mt-4 text-lg font-black tracking-tighter text-slate-900 uppercase">
            {courseData.title}
          </h2>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {courseData.modules.map((module) => (
            <div key={module.id} className="mb-2">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-wider">
                  {module.title}
                </p>
              </div>

              {module.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={`w-full flex items-center px-6 py-4 text-left border-b border-slate-50 transition-all ${
                    (activeLessonId || firstLessonId) === lesson.id
                      ? "bg-indigo-50/30 border-l-2 border-l-indigo-600"
                      : "hover:bg-slate-50 border-l-2 border-l-transparent"
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold text-slate-300 mr-4">
                    {String(lesson.position).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      activeLessonId === lesson.id
                        ? "text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    {lesson.title}
                  </span>
                  {completedLessons.includes(lesson.id) && (
                    <span className="ml-auto text-indigo-600 text-xs font-bold">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* MAIN STAGE: The Content */}
      <main className="w-full flex flex-col bg-white">
        <div className="h-16 border-b border-slate-100 flex items-center px-10">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {courseData.title} /{" "}
            <span className="text-indigo-600">{currentLesson?.title}</span>
          </p>
        </div>

        <div className="p-10 overflow-y-auto">
          <div className="w-full mx-auto">
            {/* Video Box */}
            <div className="aspect-video bg-slate-900 flex items-center justify-center text-slate-500 font-mono text-xs italic">
              [ Source: {currentLesson?.contentUrl} ]
            </div>

            <div className="mt-10 border-b border-slate-100 pb-10">
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
                {currentLesson?.title}
              </h1>
              <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl font-medium">
                {/* This will now show the lesson description once added to mock data */}
                {currentLesson?.description ||
                  "No technical briefing available for this lesson."}
              </p>
              <button
                onClick={() => toggleComplete(currentLesson?.id)}
                className={`mt-6 px-6 py-2 text-[10px] font-bold uppercase tracking-widest border-2 transition-all ${
                  completedLessons.includes(currentLesson?.id)
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {completedLessons.includes(currentLesson?.id)
                  ? "Mark Incomplete"
                  : "Mark as Completed"}
              </button>
            </div>

            {/* Navigation */}
            <div className="py-10 flex gap-4 items-center justify-end">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-8 py-4 border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50"
              >
                Previous Lesson
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === flatLessons.length - 1}
                className="px-8 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600"
              >
                Next Lesson
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
