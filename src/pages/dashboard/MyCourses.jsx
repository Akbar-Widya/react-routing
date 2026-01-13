import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

export default function MyCourses() {
  const courses = useStore((state) => state.courses);
  const getCourseProgress = useStore((state) => state.getCourseProgress);
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [courses, query]);

  return (
    <div className="max-w-4xl space-y-12">
      <header className="space-y-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
            My Library
          </h1>
          <p className="text-slate-500 font-medium mt-2">
            Your active curriculum branches.
          </p>
        </div>

        {/* Minimal Search - Matches Home Page feel */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH BY COURSE..."
            className="w-full bg-transparent border-b border-slate-200 py-3 text-[10px] font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300"
          />
        </div>
      </header>

      {/* List Style - Stripped of "Crowded" Boxes */}
      {filteredCourses.map((course, index) => {
        const progress = getCourseProgress(course.id);

        return (
          <Link
            key={course.id}
            to={`/dashboard/courses/${course.id}`}
            className="group flex flex-col py-10 border-b border-slate-100 transition-colors hover:bg-slate-50 px-4 -mx-4"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-8">
                <span className="font-mono text-[10px] font-bold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    {course.category || "General"}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-mono text-sm font-black text-slate-900">
                  {progress}%
                </p>
                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">
                  Mastery
                </p>
              </div>
            </div>

            {/* Indigo is reserved ONLY for the progress line */}
            <div className="w-full h-[2px] bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
