import { useParams, Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { useMemo } from "react";

export default function CourseDetail() {
  const { courseId } = useParams();
  
  const courses = useStore((state) => state.courses);
  const allModules = useStore((state) => state.modules);
  // Pull completion data from store
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

  // Calculate percentage
  const progress = useMemo(() => getCourseProgress(courseId), [courseId, completedLessons, getCourseProgress]);

  if (!courseData) return <div className="p-20 text-slate-400 font-mono">0x404 // Protocol Not Found</div>;

  return (
    <div className="max-w-4xl font-sans">
      {/* Header Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
            {courseData.category || "Module"}
          </span>
          <div className="h-[1px] w-8 bg-slate-200"></div>
          {/* Progress Badge */}
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            {progress}% Mastery
          </span>
        </div>
        
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 uppercase">
          {courseData.title}
        </h1>

        {/* Progress Bar */}
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
          className="bg-slate-900 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-indigo-600 transition-colors inline-block"
        >
          {progress > 0 ? "Continue Work Stage" : "Enter Work Stage"}
        </Link>
      </section>

      {/* Dynamic Syllabus Structure */}
      <section className="border-t border-slate-100 pt-12">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">
          Curriculum Structure
        </h3>

        <div className="space-y-6">
          {courseData.modules.map((module) => (
            <div key={module.id} className="border border-slate-100">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <p className="text-[10px] font-bold text-slate-900 uppercase">
                  {module.title}
                </p>
                <span className="text-[9px] font-medium text-slate-400 uppercase tracking-tighter">
                  {module.lessons.length} Lessons
                </span>
              </div>

              <div className="divide-y divide-slate-50">
                {module.lessons.map((lesson) => {
                  const isComplete = completedLessons.includes(lesson.id);
                  return (
                    <div key={lesson.id} className="px-6 py-4 flex justify-between items-center group hover:bg-slate-50/50">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-[10px] ${isComplete ? "text-indigo-600 font-bold" : "text-slate-300"}`}>
                          {isComplete ? "✓" : String(lesson.position).padStart(2, "0")}
                        </span>
                        <span className={`text-xs font-semibold ${isComplete ? "text-slate-400 line-through" : "text-slate-600 group-hover:text-slate-900"}`}>
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 italic">
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