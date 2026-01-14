import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-8 font-sans">
      {/* --- HERO SECTION: Consistent with Home --- */}
      <section className="py-32 md:py-48 flex flex-col items-start border-b border-slate-100">
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.8] tracking-tighter mb-10">
          Skill <br />
          <span className="text-indigo-600">Built.</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-md leading-relaxed mb-12 font-medium">
          A disciplined environment for high-demand mastery. Professional
          training stripped of noise and distraction.
        </p>
      </section>

      {/* --- STORY / PHILOSOPHY SECTION --- */}
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">
            OUR PHILOSOPHY
          </p>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Why Oaks <br /> Exists.
          </h2>
        </div>
        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <p>
            In a world saturated with information, true knowledge often gets
            lost in the noise. Oaks Protocol was established to cut through this
            clutter, offering a focused and rigorous path to expertise in
            critical professional domains. We believe that mastery isn't
            accidental; it's a direct result of precise, disciplined learning.
          </p>
          <p>
            Our platform is more than just courses; it's a commitment to a
            higher standard. A standard where every lesson is impactful, every
            module builds actionable skill, and your progress is a clear,
            undeniable metric of your growth.
          </p>
        </div>
      </section>

      {/* --- TRUST GRID --- */}
      <section className="py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            {
              title: "Access",
              desc: "Lifetime access to all modules within an enrolled course. Includes curriculum updates.",
            },
            {
              title: "Certification",
              desc: "Digital credentials issued upon 100% completion of all modules and lessons.",
            },
            {
              title: "Mentorship",
              desc: "Direct communication with senior instructors via the student dashboard.",
            },
            {
              title: "Structure",
              desc: "One-time tuition fee per course. No recurring subscriptions or hidden costs.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 tracking-tight uppercase">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-12">
          Ready to <span className="text-indigo-600">Elevate?</span>
        </h2>
        <Link
          to="/login"
          className="group inline-flex items-center gap-6 bg-slate-900 text-white px-10 py-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:bg-indigo-600"
        >
          Explore the Curriculum
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Link>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs font-black tracking-tighter text-slate-900 uppercase">
          Oaks Protocol
        </span>

        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase text-right">
            Project by Akbar Widya // 2026
          </span>
          <div className="w-2 h-2 bg-indigo-600"></div>
        </div>
      </footer>
    </div>
  );
}
