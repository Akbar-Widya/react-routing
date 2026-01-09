import { useParams, Link } from "react-router-dom";

export default function CourseDetail() {
  const { courseId } = useParams();
  return (
    <div>
      <Link to="/dashboard/courses" className="text-sm text-indigo-600 mb-4 inline-block underline">← Back to List</Link>
      <div className="bg-white p-10 rounded-3xl shadow-sm border">
        <h1 className="text-4xl font-black capitalize mb-6">{courseId.replace("-", " ")}</h1>
        <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center text-slate-500">Video Player Placeholder</div>
      </div>
    </div>
  );
}