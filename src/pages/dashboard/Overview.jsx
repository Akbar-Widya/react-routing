import { useStore } from "../../store/useStore";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Overview() {
  const { currentUser, courses, getCourseProgress } = useStore();
  const user = currentUser;

  const totalMastery = useMemo(() => {
    if (!courses || courses.length === 0) return 0;
    const total = courses.reduce(
      (acc, course) => acc + getCourseProgress(course.id),
      0
    );
    return Math.round(total / courses.length);
  }, [courses, getCourseProgress]);

  const currentCourse = useMemo(() => {
    if (!courses?.length) return null;
    return (
      courses.find((c) => {
        const p = getCourseProgress(c.id);
        return p > 0 && p < 100;
      }) || courses[0]
    );
  }, [courses, getCourseProgress]);

  const recentCourses = useMemo(() => {
    return [...courses]
      .filter((c) => getCourseProgress(c.id) > 0)
      .sort((a, b) => getCourseProgress(b.id) - getCourseProgress(a.id))
      .slice(0, 3);
  }, [courses, getCourseProgress]);

  return (
    <div className="space-y-12 max-md:space-y-6 max-w-5xl">
      <header className="max-md:p-6">
        <h1 className="text-6xl max-md:text-4xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
          Welcome, <br />
          <span className="text-indigo-600">
            {/* FIXED: Removed .split() to show full First and Last name */}
            {user?.name || "Verified Student"}
          </span>
        </h1>
        <p className="text-slate-500 font-semibold mt-6 max-w-xl leading-relaxed uppercase text-[10px] tracking-widest">
          System operational. You have achieved{" "}
          <span className="text-slate-900 font-bold">
            {totalMastery}% total mastery
          </span>
          .
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-md:gap-0">
        {[
          { label: "Active Courses", value: courses?.length || 0 },
          { label: "Total Progress", value: `${totalMastery}%` },
          {
            label: "System Status",
            value: "Optimal",
            color: "text-emerald-500",
          },
        ].map((stat, i) => (
          <div key={i} className="border border-slate-100 p-6 bg-white">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {stat.label}
            </p>
            <p
              className={`text-3xl font-black mt-2 ${
                stat.color || "text-slate-900"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Featured Course */}
      {currentCourse && (
        <section className="bg-slate-900 p-10 max-md:p-6 text-white relative overflow-hidden">
          <div className="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/[0.03] italic select-none pointer-events-none">
            {getCourseProgress(currentCourse.id)}%
          </div>
          <div className="relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              Continue Learning
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-3xl font-bold tracking-tight uppercase">
                  {currentCourse.title}
                </h3>
                <p className="text-slate-400 mt-2 font-mono text-sm italic">
                  Current Mastery: {getCourseProgress(currentCourse.id)}%
                </p>
              </div>
              <Link
                to={`/dashboard/player/${currentCourse.id}`}
                className="bg-white text-slate-900 px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all"
              >
                Resume Course
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Activity Section */}
      <section className="space-y-4 max-md:space-y-2">
        <h2 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-8 max-md:mb-4">
          Recent Activity
        </h2>
        <div className="space-y-0">
          {recentCourses.length > 0 ? (
            recentCourses.map((course, index) => {
              const progress = getCourseProgress(course.id);
              return (
                <Link
                  key={course.id}
                  to={`/dashboard/courses/${course.id}`}
                  className="group flex flex-col py-10 max-md:py-3 border-b border-slate-100 transition-colors hover:bg-slate-50 px-4 -mx-4"
                >
                  <div className="flex justify-between items-start mb-6 max-md:mb-2">
                    <div className="flex items-center gap-8 min-w-0">
                      <span className="font-mono text-[10px] font-bold text-slate-400 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                          {course.title}
                        </h3>
                        {/* Replaced status with one-line description */}
                        <p className="text-[11px] font-medium text-slate-500 mt-1 truncate">
                          {course.description ||
                            "In-depth implementation of scalable industry patterns."}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-4">
                      <p className="font-mono text-sm font-black text-slate-900">
                        {progress}%
                      </p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                        Progress
                      </p>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-[2px] bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="py-20 text-center border-b border-slate-100 -mx-4">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest italic">
                No recent activity recorded.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
