import { useStore } from "../../store/useStore";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Overview() {
  const { users, courses, getCourseProgress } = useStore();
  const user = users[0];

  const totalMastery = useMemo(() => {
    if (!courses?.length) return 0;
    const total = courses.reduce(
      (acc, course) => acc + getCourseProgress(course.id),
      0
    );
    return Math.round(total / courses.length);
  }, [courses, getCourseProgress]);

  // Main featured course: First one that is started but not finished
  const currentMission = useMemo(() => {
    if (!courses?.length) return null;
    return (
      courses.find((c) => {
        const p = getCourseProgress(c.id);
        return p > 0 && p < 100;
      }) || courses[0]
    );
  }, [courses, getCourseProgress]);

  // CORRECTED LOGIC: Sort all courses by progress and take the top 3
  // This ensures "Recent Courses" shows where you are actually spending time.
  const recentCourses = useMemo(() => {
    return [...courses]
      .filter((c) => getCourseProgress(c.id) > 0)
      .sort((a, b) => getCourseProgress(b.id) - getCourseProgress(a.id))
      .slice(0, 3);
  }, [courses, getCourseProgress]);

  return (
    <div className="space-y-12 max-w-5xl">
      <header>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8]">
          Welcome, <br />
          <span className="text-indigo-600">
            {user?.name?.split(" ")[0] || "Student"}
          </span>
        </h1>
        <p className="text-slate-500 font-medium mt-6 max-w-xl leading-relaxed">
          System operational. You have achieved{" "}
          <span className="text-slate-900 font-bold">
            {totalMastery}% total mastery
          </span>
          .
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Active Branches", value: courses?.length || 0 },
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

      {currentMission && (
        <section className="bg-slate-900 p-10 text-white relative overflow-hidden">
          <div className="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/[0.03] italic select-none pointer-events-none">
            {getCourseProgress(currentMission.id)}%
          </div>
          <div className="relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              Continue Learning
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-3xl font-bold tracking-tight uppercase">
                  {currentMission.title}
                </h3>
                <p className="text-slate-400 mt-2 font-mono text-sm italic">
                  Progress: {getCourseProgress(currentMission.id)}%
                </p>
              </div>
              <Link
                to={`/dashboard/player/${currentMission.id}`}
                className="bg-white text-slate-900 px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all"
              >
                Resume Course
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* RECENT COURSES - Fixed terminology and logic */}
      <section className="space-y-4">
        <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-8">
          Recent Activity
        </h2>

        {recentCourses.length > 0 ? (
          recentCourses.map((course, index) => {
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
            <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest italic">
              No recent course history detected.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
