import { useState, useMemo } from "react"; // 1. Added React hooks
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function Home() {
  const courses = useStore((state) => state.courses);

  // 2. Search State
  const [query, setQuery] = useState("");

  // 3. Filtered Logic (stripping distractions/noise)
  const filteredCourses = useMemo(() => {
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description?.toLowerCase().includes(query.toLowerCase())
    );
  }, [courses, query]);

  return (
    <div className="max-w-6xl mx-auto px-8 font-sans">
      {/* --- HERO: Oaks Protocol Branding --- */}
      <section className="py-32 md:py-48 flex flex-col items-start border-b border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px] bg-slate-900"></div>
          <p className="text-xs font-semibold tracking-tight text-slate-900">
            Oaks Protocol // Digital Skills Index 2026
          </p>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-10">
          Skill <br />
          <span className="text-indigo-600">Built.</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-md leading-relaxed mb-12 font-medium">
          A disciplined environment for high-demand mastery. Professional
          training stripped of distraction.
        </p>

        <Link
          to="/dashboard"
          className="group inline-flex items-center gap-6 bg-slate-900 text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-indigo-600"
        >
          Explore Curriculum
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Link>
      </section>

      {/* --- SEARCH --- */}
      <section className="pt-24 pb-8">
        <div className="flex flex-col gap-12">
          {/* Heading Group */}
          <div className="space-y-2">
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">
              Curriculum Index
            </p>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Available Modules
            </h2>
          </div>

          {/* Search Input - Full Width for better 'Air' */}
          <div className="relative group">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or topic.."
              className="w-full bg-transparent border-b border-slate-200 py-4 text-[11px] font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-indigo-600 transition-all placeholder:text-slate-300"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 hover:text-indigo-600"
              >
                [ CLEAR FILTER ]
              </button>
            )}
          </div>
        </div>
      </section>

      {/* --- LIST: Advanced Modules --- */}
      <section className="pb-24">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Link
              key={course.id}
              to="/login"
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-slate-100 transition-colors hover:bg-slate-50 px-4 -mx-4"
            >
              <div className="flex items-start md:items-center gap-10 md:gap-20">
                <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-indigo-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="max-w-xl">
                  <span className="text-[10px] font-bold text-indigo-500 mb-2 block tracking-tight">
                    Advanced Module
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mt-2 font-medium leading-relaxed">
                    {course.description ||
                      "In-depth implementation of scalable professional patterns."}
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-12 self-end md:self-center">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-300 mb-1">
                    Tuition
                  </p>
                  <p className="font-mono text-sm font-bold text-slate-900">
                    ${course.price}
                  </p>
                </div>
                <div className="w-8 h-8 border border-slate-200 flex items-center justify-center transition-all duration-200 group-hover:border-indigo-600 group-hover:bg-indigo-600">
                  <span className="text-slate-400 text-xs group-hover:text-white">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="py-24 text-center">
            <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest italic">
              0x00 // No modules found matching "{query}"
            </p>
          </div>
        )}
      </section>

      {/* --- TRUST GRID --- */}
      <section className="py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              title: "Access",
              desc: "Lifetime access to all enrolled modules. Includes future curriculum updates.",
            },
            {
              title: "Certification",
              desc: "Digital credentials issued upon 100% completion of any Advanced Module.",
            },
            {
              title: "Support",
              desc: "Direct communication with instructors via the student dashboard.",
            },
            {
              title: "Investment",
              desc: "One-time tuition fee per module. No recurring subscriptions or hidden costs.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER: Oaks Protocol Signature --- */}
      <footer className="py-24 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs font-semibold tracking-tight text-slate-900">
          System // Logic // Mastery
        </span>

        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">
            © 2026 Oaks Protocol
          </span>
          <div className="w-2 h-2 bg-indigo-600"></div>
        </div>
      </footer>
    </div>
  );
}
