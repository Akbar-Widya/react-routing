import { useParams, Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { useMemo } from "react";

export default function CourseDetail() {
  const { courseId } = useParams();

  const courses = useStore((state) => state.courses);
  const allModules = useStore((state) => state.modules);
  const completedLessons = useStore((state) => state.completedLessons);
  const getCourseProgress = useStore((state) => state.getCourseProgress);

  const courseData = useMemo(() => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return null;

    const courseModules = allModules
      .filter((m) => m.courseId === courseId)
      .sort((a, b) => a.position - b.position);

    return { ...course, modules: courseModules };
  }, [courseId, courses, allModules]);

  const progress = useMemo(
    () => getCourseProgress(courseId),
    [courseId, completedLessons, getCourseProgress]
  );

  if (!courseData)
    return (
      <div className="p-20 text-slate-400 font-mono text-xs uppercase tracking-widest">
        Course not found.
      </div>
    );

  return (
    <div className="max-w-4xl font-sans">
      {/* --- Header Section --- */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Link
            to="/dashboard/courses"
            className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
          >
            ← Back to Courses
          </Link>
          <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-widest">
            // {courseData.category || "Professional Training"}
          </span>
          <div className="h-[1px] w-8 bg-slate-200"></div>
          {/* Softened progress label */}
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
            {progress}% Mastery
          </span>
        </div>

        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase">
          {courseData.title}
        </h1>

        {/* Progress Visualization */}
        <div className="max-w-xs mb-10">
          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link
          to={`/dashboard/player/${courseId}`}
          className="bg-slate-900 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-600 transition-colors inline-block"
        >
          {progress > 0 ? "Continue Learning" : "Start Course"}
        </Link>
      </section>

      {/* --- Courses Breakdown --- */}
      <section className="border-t border-slate-100 pt-12">
        <h3 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-8">
          Course Curriculum
        </h3>

        <div className="space-y-6">
          {courseData.modules.map((module) => (
            <div key={module.id} className="border border-slate-100 bg-white">
              {/* Module Header - Softened to Semibold */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <p className="text-[10px] font-semibold text-slate-900 uppercase tracking-tight">
                  Module: {module.title}
                </p>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-tighter">
                  {module.lessons.length} Lessons
                </span>
              </div>

              {/* Lesson List */}
              <div className="divide-y divide-slate-50">
                {module.lessons.map((lesson) => {
                  const isComplete = completedLessons.includes(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      className="px-6 py-4 flex justify-between items-center group hover:bg-slate-50/50"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-[10px] ${
                            isComplete
                              ? "text-indigo-600 font-semibold"
                              : "text-slate-300 font-medium"
                          }`}
                        >
                          {isComplete
                            ? "✓"
                            : String(lesson.position).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isComplete
                              ? "text-slate-400 line-through"
                              : "text-slate-600 group-hover:text-slate-900"
                          }`}
                        >
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 italic">
                        {Math.floor(lesson.duration / 60)}m
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
