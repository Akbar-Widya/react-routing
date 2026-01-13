import { Link, useSearchParams } from "react-router-dom";

export default function MyCourses() {
  const [searchParams, setSearchParams] = useSearchParams();
  // useSearchParams looks like useState, it can have updater function too.
  const query = searchParams.get("search") || "";
  const courses = [
    { id: "react-101", title: "React Router Mastery" },
    { id: "tailwind-202", title: "Tailwind CSS Layouting" }
  ];

  const filtered = courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <input 
          className="border p-2 rounded-lg text-sm w-64 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500" 
          placeholder="Filter courses..." 
          value={query}
          onChange={(e) => setSearchParams({ search: e.target.value })}
        />
      </div>
      <div className="grid gap-4">
        {filtered.map(course => (
          <Link to={`/dashboard/courses/${course.id}`} key={course.id} className="p-5 bg-white border rounded-2xl flex justify-between items-center hover:border-indigo-300 transition shadow-sm">
            <span className="font-bold">{course.title}</span>
            <span className="text-indigo-600 text-sm font-medium">Open Module →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}