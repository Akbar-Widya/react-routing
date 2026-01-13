import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function Home() {
  const courses = useStore((state) => state.courses);

  return (
    <div className="max-w-6xl mx-auto px-8">
      {/* --- HERO: High Contrast, Zero Noise --- */}
      <section className="py-32 md:py-48 flex flex-col items-start border-b border-slate-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px] bg-slate-900"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">
            Curriculum Index // 2026
          </p>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-10">
          Hard <br />
          <span className="text-indigo-600">Coded.</span>
        </h1>
        
        {/* Slate-600 for contrast accessibility (>4.5:1) */}
        <p className="text-xl text-slate-600 max-w-md leading-relaxed mb-12 font-medium">
          A quiet environment for technical mastery. 
          Stripped of distraction, built for architectural focus.
        </p>

        <Link
          to="/dashboard"
          className="group inline-flex items-center gap-6 bg-slate-900 text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-600 transition-colors duration-200"
        >
          Enter Index
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </section>

      {/* --- THE LIST: Linear & Accessible --- */}
      <section className="py-24">
        <div className="border-t-2 border-slate-900">
          {courses.map((course) => (
            <Link
              key={course.id}
              to="/login"
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-slate-100 hover:bg-slate-50 transition-colors px-4 -mx-4"
            >
              <div className="flex items-start md:items-center gap-10 md:gap-20">
                {/* ID: Accessible Gray */}
                <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                  {course.id}
                </span>

                <div className="max-w-xl">
                  <h3 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mt-2 font-medium leading-relaxed">
                    {course.description || "Foundational patterns for production-ready system implementation."}
                  </p>
                </div>
              </div>

              {/* Action: Static but precise */}
              <div className="mt-8 md:mt-0 flex items-center gap-12 self-end md:self-center">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Fee</p>
                  <p className="text-sm font-mono font-bold text-slate-900">${course.price}</p>
                </div>
                {/* Small, sharp box instead of a large animated button */}
                <div className="w-8 h-8 border border-slate-200 flex items-center justify-center group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-all duration-200">
                  <span className="text-slate-400 group-hover:text-white text-xs">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="py-16 border-t border-slate-100 flex justify-between items-center">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
          Architecture // Logic // Silence
        </span>
        <div className="w-2 h-2 bg-indigo-600"></div>
      </footer>
    </div>
  );
}